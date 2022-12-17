package websocket

import (
	"errors"
	"sync"
)

type ConnectionManager struct {
	connections sync.Map
}

func NewConnectionManager() *ConnectionManager {
	return &ConnectionManager{}
}

func (c *ConnectionManager) PutConnection(userId int32, connection *WebsocketConnection) {
	c.connections.Store(userId, connection)
}

func (c *ConnectionManager) GetConnection(userId int32) (*WebsocketConnection, error) {
	connection, has := c.connections.Load(userId)
	if has {
		return connection.(*WebsocketConnection), nil
	} else {
		return nil, errors.New("connection not exists")
	}
}

func (c *ConnectionManager) DeleteConnection(userId int32) error {
	_, has := c.connections.Load(userId)
	if has {
		c.connections.Delete(userId)
		return nil
	} else {
		return errors.New("connection not exists")
	}
}
