package common

import "time"

const (
	ConfigFileName = "./conf/config.toml"
)

const (
	SessionUser   = "session_user:"
	UserSession   = "user_session:"
	SessionExpire = -1 * time.Second
	RedisNil      = "redis: nil"

	UserGame       = "user_game:"
	UserGameExpire = -1 * time.Second
)

const (
	CRC32SignIn int32 = 10001
	CRC32Match  int32 = 10002
	CRC32Doll   int32 = 10003

	CRC32User        int32 = 20001
	CRC32Bool        int32 = 20002
	CRC32MatchResult int32 = 20003
	CRC32DollResult  int32 = 20004
)
