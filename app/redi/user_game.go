package redi

import (
	"context"
	"github.com/ChenMoGe2/SnakeLadder/app/common"
	"github.com/go-redis/redis/v8"
	"strconv"
)

type UserGameRedis struct {
	redis *redis.Client
}

func NewUserGameRedis(redis *redis.Client) *UserGameRedis {
	return &UserGameRedis{redis: redis}
}

func (c *UserGameRedis) PutUserGame(ctx context.Context, userId, gameId int32) error {
	key := common.UserGame + strconv.FormatInt(int64(userId), 10)
	err := c.redis.Set(ctx, key, gameId, common.UserGameExpire).Err()
	if err != nil {
		return err
	}
	return nil
}

func (c *UserGameRedis) GetUserGame(ctx context.Context, userId int32) (int32, error) {
	key := common.UserGame + strconv.FormatInt(int64(userId), 10)
	gameId, err := c.redis.Get(ctx, key).Int()
	if err != nil {
		if err.Error() == common.RedisNil {
			return 0, nil
		}
		return 0, err
	}
	return int32(gameId), nil
}

func (c *UserGameRedis) DelUserGame(ctx context.Context, userId int32) error {
	key := common.UserGame + strconv.FormatInt(int64(userId), 10)
	err := c.redis.Del(ctx, key).Err()
	if err != nil {
		return err
	}
	return nil
}
