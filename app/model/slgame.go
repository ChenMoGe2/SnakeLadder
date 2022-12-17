package model

import (
	"time"
)

// Game [...]
type Game struct {
	ID        int32     `gorm:"primaryKey;column:id;type:int;not null"`
	Map       string    `gorm:"column:map;type:varchar(2048);not null;default:[]"`
	Process   string    `gorm:"column:process;type:varchar(2048);not null"`
	CurUserID int32     `gorm:"column:cur_user_id;type:int;not null"`
	CreateAt  time.Time `gorm:"column:create_at;type:timestamp;not null;default:CURRENT_TIMESTAMP"`
}

// GameColumns get sql column name.获取数据库列名
var GameColumns = struct {
	ID        string
	Map       string
	Process   string
	CurUserID string
	CreateAt  string
}{
	ID:        "id",
	Map:       "map",
	Process:   "process",
	CurUserID: "cur_user_id",
	CreateAt:  "create_at",
}

// GameUser [...]
type GameUser struct {
	ID       int32     `gorm:"primaryKey;column:id;type:int;not null"`
	GameID   int32     `gorm:"column:game_id;type:int;not null"`
	UserID   int32     `gorm:"column:user_id;type:int;not null"`
	CurPos   int32     `gorm:"column:cur_pos;type:int;not null"`
	CreateAt time.Time `gorm:"column:create_at;type:timestamp;not null;default:CURRENT_TIMESTAMP"`
}

// GameUserColumns get sql column name.获取数据库列名
var GameUserColumns = struct {
	ID       string
	GameID   string
	UserID   string
	CurPos   string
	CreateAt string
}{
	ID:       "id",
	GameID:   "game_id",
	UserID:   "user_id",
	CurPos:   "cur_pos",
	CreateAt: "create_at",
}

// User [...]
type User struct {
	ID       int32     `gorm:"primaryKey;column:id;type:int;not null"`
	Username string    `gorm:"unique;column:username;type:varchar(32);not null"`
	Score    int32     `gorm:"column:score;type:int;not null"`
	CreateAt time.Time `gorm:"column:create_at;type:timestamp;default:CURRENT_TIMESTAMP"`
}

// UserColumns get sql column name.获取数据库列名
var UserColumns = struct {
	ID       string
	Username string
	Score    string
	CreateAt string
}{
	ID:       "id",
	Username: "username",
	Score:    "score",
	CreateAt: "create_at",
}
