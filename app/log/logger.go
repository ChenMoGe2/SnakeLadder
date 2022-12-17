package log

import (
	"github.com/ChenMoGe2/SnakeLadder/app/common"
	"github.com/ChenMoGe2/SnakeLadder/app/utils/log"
	"go.uber.org/zap"
)

var logger *zap.Logger

func InitLogger(config *common.Config) {
	logger = log.NewLogger(config.LogConf.LogFile, zap.DebugLevel, config.LogConf.MaxSize, config.LogConf.MaxBackUp, config.LogConf.MaxAge, false, "users")
}

func Log() *zap.Logger {
	return logger
}
