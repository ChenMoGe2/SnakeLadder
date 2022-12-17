package app

import (
	"flag"
	"github.com/BurntSushi/toml"
	"github.com/ChenMoGe2/SnakeLadder/app/common"
	"github.com/ChenMoGe2/SnakeLadder/app/log"
	"github.com/ChenMoGe2/SnakeLadder/app/utils/database"
	"github.com/ChenMoGe2/SnakeLadder/app/websocket"
	"github.com/go-redis/redis/v8"
	"go.uber.org/zap"
	"time"
)

var (
	config common.Config
)

func init() {
	var configFile string
	flag.StringVar(&configFile, "config", common.ConfigFileName, "configuration file of server")
	flag.Parse()
	_, err := toml.DecodeFile(configFile, &config)
	if err != nil {
		panic(err)
	}
	log.InitLogger(&config)
}

func Server() {
	redisCache := redis.NewClient(&redis.Options{
		Addr:               config.RedisConf.RedisAddress,
		Password:           config.RedisConf.RedisPassword,
		PoolSize:           config.RedisConf.RedisPoolSize,
		MinIdleConns:       config.RedisConf.RedisMinIdleConns,
		DialTimeout:        config.RedisConf.RedisDialTimeout * time.Second,
		ReadTimeout:        config.RedisConf.RedisReadTimeout * time.Second,
		WriteTimeout:       config.RedisConf.RedisWriteTimeout * time.Second,
		PoolTimeout:        config.RedisConf.RedisPoolTimeout * time.Second,
		IdleCheckFrequency: config.RedisConf.RedisIdleCheckFrequency * time.Second,
		IdleTimeout:        config.RedisConf.RedisIdleTimeout * time.Minute,
		MaxConnAge:         config.RedisConf.RedisMaxConnAge * time.Second,
		MaxRetries:         config.RedisConf.RedisMaxRetries,
		MinRetryBackoff:    config.RedisConf.RedisMinRetryBackoff * time.Millisecond,
		MaxRetryBackoff:    config.RedisConf.RedisMaxRetryBackoff * time.Millisecond,
	})

	db := database.NewGorm(config.DbConf.MysqlHost, config.DbConf.MysqlPort, config.DbConf.MysqlUsername, config.DbConf.MysqlPassword, config.DbConf.MysqlDbName, config.DbConf.MysqlCharset, config.DbConf.MysqlConnMaxLifetime, config.DbConf.MysqlMaxOpenConns, config.DbConf.MysqlMaxIdleConns)

	connManager := websocket.NewConnectionManager()

	bizLogic := websocket.NewBizLogic(redisCache, db, connManager)

	log.Log().Info("start websocket server at port", zap.Int("port", config.ServerConf.WebsocketPort))
	websocket.NewWebSocketServer("0.0.0.0", config.ServerConf.WebsocketPort, bizLogic, connManager)
}
