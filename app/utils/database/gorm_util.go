package database

import (
	"fmt"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"time"
)

func NewGorm(host string, port int, username string, password string, dbName string, charset string, connMaxLifeTime int, maxOpenConns int, maxIdleConns int) *gorm.DB {
	dbInfo := fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=%s&parseTime=True&loc=Local", username, password, host, port, dbName, charset)
	db, err := gorm.Open(mysql.Open(dbInfo), &gorm.Config{})
	if err != nil {
		panic(err)
	}

	sqlDB, err := db.DB()
	if err != nil {
		panic(err)
	}
	sqlDB.SetConnMaxLifetime(time.Second * time.Duration(connMaxLifeTime))
	sqlDB.SetMaxOpenConns(maxOpenConns)
	sqlDB.SetMaxIdleConns(maxIdleConns)
	return db
}
