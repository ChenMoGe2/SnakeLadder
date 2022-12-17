package redi

import (
	"context"
	"github.com/ChenMoGe2/SnakeLadder/app/common"
	"github.com/go-redis/redis/v8"
	"strconv"
)

type SessionRedis struct {
	redis *redis.Client
}

func NewSessionRedis(redis *redis.Client) *SessionRedis {
	return &SessionRedis{redis: redis}
}

func (c *SessionRedis) PutSession(ctx context.Context, sessionId, userId int32) error {
	key := common.SessionUser + strconv.FormatInt(int64(sessionId), 10)
	err := c.redis.Set(ctx, key, userId, common.SessionExpire).Err()
	if err != nil {
		return err
	}
	key = common.UserSession + strconv.FormatInt(int64(userId), 10)
	err = c.redis.Set(ctx, key, sessionId, common.SessionExpire).Err()
	if err != nil {
		return err
	}
	return nil
}

func (c *SessionRedis) GetUserIdBySessionId(ctx context.Context, sessionId int32) (int32, error) {
	key := common.SessionUser + strconv.FormatInt(int64(sessionId), 10)
	userId, err := c.redis.Get(ctx, key).Int()
	if err != nil {
		if err.Error() == common.RedisNil {
			return 0, nil
		}
		return 0, err
	}
	return int32(userId), nil
}

func (c *SessionRedis) GetSessionIdByUserId(ctx context.Context, userId int32) (int32, error) {
	key := common.UserSession + strconv.FormatInt(int64(userId), 10)
	sessionId, err := c.redis.Get(ctx, key).Int()
	if err != nil {
		if err.Error() == common.RedisNil {
			return 0, nil
		}
		return 0, err
	}
	return int32(sessionId), nil
}
