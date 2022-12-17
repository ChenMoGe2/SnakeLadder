package websocket

import (
	"context"
	"github.com/ChenMoGe2/SnakeLadder/app/common"
	"github.com/ChenMoGe2/SnakeLadder/app/dao"
	"github.com/ChenMoGe2/SnakeLadder/app/game"
	"github.com/ChenMoGe2/SnakeLadder/app/redi"
	slproto "github.com/ChenMoGe2/SnakeLadder/proto"
	"github.com/go-redis/redis/v8"
	"github.com/golang/protobuf/proto"
	"github.com/google/uuid"
	"gorm.io/gorm"
	"math/rand"
)

type BizLogic struct {
	sessionRedis      *redi.SessionRedis
	userGameRedis     *redi.UserGameRedis
	slDao             *dao.SLDao
	waitingUserId     int32
	connectionManager *ConnectionManager
}

func NewBizLogic(redis *redis.Client, db *gorm.DB, connectionManager *ConnectionManager) *BizLogic {
	return &BizLogic{
		sessionRedis:      redi.NewSessionRedis(redis),
		userGameRedis:     redi.NewUserGameRedis(redis),
		slDao:             dao.NewSLDao(db),
		connectionManager: connectionManager,
	}
}

func (s *BizLogic) SignIn(args *slproto.SignIn) (*slproto.User, int32, error) {
	username := args.GetUsername()
	modelUser, err := s.slDao.SignIn(context.Background(), username)
	if err != nil {
		return nil, 0, err
	}

	rand.Seed(int64(uuid.New().ID()))
	sessionId := rand.Int31()

	err = s.sessionRedis.PutSession(context.Background(), sessionId, modelUser.ID)
	if err != nil {
		return nil, 0, err
	}

	user := &slproto.User{}
	user.Id = modelUser.ID
	user.Username = modelUser.Username
	user.Score = modelUser.Score

	return user, sessionId, nil
}

func (s *BizLogic) Match(userId int32, args *slproto.Match) (*slproto.Bool, error) {
	if s.waitingUserId == 0 {
		s.waitingUserId = userId
	} else {
		gameUserIds := []int32{s.waitingUserId, userId}
		curUserIdIndex := game.GetRandIndex(int32(len(gameUserIds)))
		curUserId := gameUserIds[curUserIdIndex]
		modelUsers, err := s.slDao.GetUserByIds(context.Background(), gameUserIds)
		if err != nil {
			return nil, err
		}
		gameMap := game.GetRandomMap()
		gameId, err := s.slDao.CreateGame(context.Background(), curUserId, gameMap)
		if err != nil {
			return nil, err
		}
		userIds := make([]int32, len(modelUsers))
		users := make([]*slproto.User, len(modelUsers))
		for i, modelUser := range modelUsers {
			user := &slproto.User{
				Id:       modelUser.ID,
				Username: modelUser.Username,
				Score:    modelUser.Score,
			}
			users[i] = user
			userIds[i] = modelUser.ID
			err = s.userGameRedis.PutUserGame(context.Background(), modelUser.ID, gameId)
			if err != nil {
				return nil, err
			}
		}
		err = s.slDao.CreateGameUser(context.Background(), gameId, userIds)
		if err != nil {
			return nil, err
		}
		for _, modelUser := range modelUsers {
			websocketConnection, err := s.connectionManager.GetConnection(modelUser.ID)
			if err != nil {
				return nil, err
			}
			sessionId, err := s.sessionRedis.GetSessionIdByUserId(context.Background(), modelUser.ID)
			if err != nil {
				return nil, err
			}
			matchResult := &slproto.MatchResult{
				Id:        gameId,
				Users:     users,
				Map:       gameMap,
				CurUserId: curUserId,
			}
			updateBytes, err := proto.Marshal(matchResult)
			if err != nil {
				return nil, err
			}
			responseSLObject := &slproto.SLObject{}
			responseSLObject.SessionId = sessionId
			responseSLObject.Crc32 = common.CRC32MatchResult
			responseSLObject.Object = updateBytes

			responseBytes, err := proto.Marshal(responseSLObject)
			if err != nil {
				return nil, err
			}
			err = websocketConnection.Send(responseBytes)
			if err != nil {
				return nil, err
			}
		}
		s.waitingUserId = 0
	}
	b := &slproto.Bool{}
	b.Value = true
	return b, nil
}

func (s *BizLogic) Doll(userId int32, args *slproto.Doll) (*slproto.DollResult, error) {
	gameId, err := s.userGameRedis.GetUserGame(context.Background(), userId)
	if err != nil {
		return nil, err
	}
	modelGame, err := s.slDao.GetGameById(context.Background(), gameId)
	if err != nil {
		return nil, err
	}
	if userId == modelGame.CurUserID {
		curPos, err := s.slDao.GetCurPosByUserId(context.Background(), gameId, userId)
		if err != nil {
			return nil, err
		}
		doll := game.GetDoll()
		newPos := curPos + doll
		if newPos > 100 {
			newPos = 200 - newPos
		}
		err = s.slDao.UpdateCurPos(context.Background(), newPos, gameId, userId)
		if err != nil {
			return nil, err
		}
		nextUserId, err := s.slDao.GetNextUserIdByGameId(context.Background(), gameId, userId)
		if err != nil {
			return nil, err
		}
		err = s.slDao.UpdateCurUserId(context.Background(), nextUserId, gameId)
		if err != nil {
			return nil, err
		}
		dollResult := &slproto.DollResult{
			Num:        doll,
			CurPos:     newPos,
			CurPlayer:  userId,
			NextPlayer: nextUserId,
		}
		websocketConnection, err := s.connectionManager.GetConnection(nextUserId)
		if err != nil {
			return nil, err
		}
		sessionId, err := s.sessionRedis.GetSessionIdByUserId(context.Background(), nextUserId)
		if err != nil {
			return nil, err
		}
		updateBytes, err := proto.Marshal(dollResult)
		if err != nil {
			return nil, err
		}
		responseSLObject := &slproto.SLObject{}
		responseSLObject.SessionId = sessionId
		responseSLObject.Crc32 = common.CRC32DollResult
		responseSLObject.Object = updateBytes

		responseBytes, err := proto.Marshal(responseSLObject)
		if err != nil {
			return nil, err
		}
		err = websocketConnection.Send(responseBytes)
		if err != nil {
			return nil, err
		}
		return dollResult, nil
	}
	return nil, nil
}
