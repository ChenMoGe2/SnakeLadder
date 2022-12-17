package common

import "time"

type LogConfig struct {
	Level     string
	LogFile   string
	MaxSize   int
	MaxBackUp int
	MaxAge    int
}

type ServerConfig struct {
	WebsocketPort int
}

type RedisConfig struct {
	RedisAddress            string
	RedisPassword           string
	RedisPoolSize           int
	RedisMinIdleConns       int
	RedisDialTimeout        time.Duration
	RedisReadTimeout        time.Duration
	RedisWriteTimeout       time.Duration
	RedisPoolTimeout        time.Duration
	RedisIdleCheckFrequency time.Duration
	RedisIdleTimeout        time.Duration
	RedisMaxConnAge         time.Duration
	RedisMaxRetries         int
	RedisMinRetryBackoff    time.Duration
	RedisMaxRetryBackoff    time.Duration
}

type DbConfig struct {
	MysqlHost            string
	MysqlPort            int
	MysqlUsername        string
	MysqlPassword        string
	MysqlDbName          string
	MysqlCharset         string
	MysqlConnMaxLifetime int
	MysqlMaxOpenConns    int
	MysqlMaxIdleConns    int
}

type Config struct {
	ServerConf ServerConfig
	LogConf    LogConfig
	RedisConf  RedisConfig
	DbConf     DbConfig
}
