package dao

import (
	"context"
	"encoding/json"
	"github.com/ChenMoGe2/SnakeLadder/app/model"
	"gorm.io/gorm"
	"time"
)

type SLDao struct {
	db *gorm.DB
}

func NewSLDao(db *gorm.DB) *SLDao {
	return &SLDao{db: db}
}

func (dao *SLDao) SignIn(ctx context.Context, username string) (*model.User, error) {
	var user *model.User
	err := dao.db.WithContext(ctx).Table("user").Where("username = ?", username).Limit(1).Find(&user).Error
	if err != nil {
		return nil, err
	}
	if user.ID == 0 {
		now := time.Now()
		insertUser := &model.User{
			Username: username,
			CreateAt: now,
		}
		tx := dao.db.WithContext(ctx).Table("user").Create(insertUser)
		if tx.Error != nil {
			return nil, tx.Error
		}
		return insertUser, nil
	}
	return user, nil
}

func (dao *SLDao) IncrScore(ctx context.Context, userId int32) error {
	updates := map[string]interface{}{
		"score": gorm.Expr("score+ ?", 1),
	}
	return dao.db.WithContext(ctx).Table("user").Select("score").Where("id = ?", userId).Updates(updates).Error
}

func (dao *SLDao) GetUserByIds(ctx context.Context, userIds []int32) ([]*model.User, error) {
	var users []*model.User
	err := dao.db.WithContext(ctx).Table("user").Where("id in ?", userIds).Find(&users).Error
	if err != nil {
		return nil, err
	}
	return users, nil
}

func (dao *SLDao) CreateGame(ctx context.Context, curUserId int32, gameMap string) (int32, error) {
	game := &model.Game{
		Map:       gameMap,
		Process:   "[]",
		CurUserID: curUserId,
		CreateAt:  time.Now(),
	}
	tx := dao.db.WithContext(ctx).Table("game").Create(game)
	if tx.Error != nil {
		return 0, tx.Error
	}
	return game.ID, nil
}

func (dao *SLDao) UpdateGameProcess(ctx context.Context, gameId, userId, num int32) error {
	var process string
	err := dao.db.WithContext(ctx).Table("game").Select("process").Where("id = ?", gameId).Limit(1).Find(&process).Error
	if err != nil {
		return err
	}
	processMap := make([]map[string]interface{}, 0)
	err = json.Unmarshal([]byte(process), &processMap)
	if err != nil {
		return err
	}
	processMap = append(processMap, map[string]interface{}{
		"user_id": userId,
		"num":     num,
	})
	processJson, _ := json.Marshal(processMap)
	game := &model.Game{
		Process: string(processJson),
	}
	return dao.db.WithContext(ctx).Table("game").Select("process").Where("id = ?", gameId).Updates(game).Error
}

func (dao *SLDao) UpdateCurUserId(ctx context.Context, curUserId, gameId int32) error {
	game := &model.Game{
		CurUserID: curUserId,
	}
	return dao.db.WithContext(ctx).Table("game").Select("cur_user_id").Where("id = ?", gameId).Updates(game).Error
}

func (dao *SLDao) UpdateVictory(ctx context.Context, victory, gameId int32) error {
	game := &model.Game{
		Victory: victory,
	}
	return dao.db.WithContext(ctx).Table("game").Select("victory").Where("id = ?", gameId).Updates(game).Error
}

func (dao *SLDao) GetGameById(ctx context.Context, gameId int32) (*model.Game, error) {
	var game *model.Game
	err := dao.db.WithContext(ctx).Table("game").Where("id = ?", gameId).Limit(1).Find(&game).Error
	if err != nil {
		return nil, err
	}
	return game, nil
}

func (dao *SLDao) CreateGameUser(ctx context.Context, gameId int32, userIds []int32) error {
	gameUsers := make([]*model.GameUser, len(userIds))
	for i, userId := range userIds {
		gameUser := &model.GameUser{
			GameID:   gameId,
			UserID:   userId,
			CreateAt: time.Now(),
		}
		gameUsers[i] = gameUser
	}
	tx := dao.db.WithContext(ctx).Table("game_user").Create(gameUsers)
	if tx.Error != nil {
		return tx.Error
	}
	return nil
}

func (dao *SLDao) UpdateCurPos(ctx context.Context, curPos, gameId, userId int32) error {
	gameUser := &model.GameUser{
		GameID: gameId,
		UserID: userId,
		CurPos: curPos,
	}
	return dao.db.WithContext(ctx).Table("game_user").Select("cur_pos").Where("game_id = ? and user_id = ?", gameId, userId).Updates(gameUser).Error
}

func (dao *SLDao) GetCurPosByUserId(ctx context.Context, gameId, userId int32) (int32, error) {
	var curPos int32
	err := dao.db.WithContext(ctx).Table("game_user").Select("cur_pos").Where("game_id = ? and user_id = ?", gameId, userId).Limit(1).Find(&curPos).Error
	if err != nil {
		return 0, err
	}
	return curPos, nil
}

func (dao *SLDao) GetNextUserIdByGameId(ctx context.Context, gameId, userId int32) (int32, error) {
	var retUserId int32
	err := dao.db.WithContext(ctx).Table("game_user").Select("user_id").Where("game_id = ? and user_id != ?", gameId, userId).Limit(1).Find(&retUserId).Error
	if err != nil {
		return 0, err
	}
	return retUserId, nil
}
