package websocket

import (
	"bytes"
	"context"
	"github.com/ChenMoGe2/SnakeLadder/app/common"
	"github.com/ChenMoGe2/SnakeLadder/app/log"
	slproto "github.com/ChenMoGe2/SnakeLadder/proto"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
	"go.uber.org/zap"
)

type WebsocketConnection struct {
	conn              *websocket.Conn
	readBuffer        *bytes.Buffer
	connectionManager *ConnectionManager
	bizLogic          *BizLogic
}

func NewWebsocketConnection(conn *websocket.Conn, connectionManager *ConnectionManager, bizLogic *BizLogic) *WebsocketConnection {
	return &WebsocketConnection{conn: conn, readBuffer: bytes.NewBuffer([]byte{}), connectionManager: connectionManager, bizLogic: bizLogic}
}

func (websocketConnection *WebsocketConnection) Recv(buf []byte) {
	slObject := slproto.SLObject{}
	err := proto.Unmarshal(buf, &slObject)
	if err != nil {
		log.Log().Error("unmarshal SLObject failed", zap.Error(err))
		return
	}

	var userId int32
	if slObject.GetSessionId() != 0 {
		userId, err = websocketConnection.bizLogic.sessionRedis.GetUserIdBySessionId(context.Background(), slObject.GetSessionId())
		if err != nil {
			log.Log().Error("get user id failed", zap.Error(err))
			return
		}
	}

	responseSLObject := &slproto.SLObject{}
	switch slObject.Crc32 {
	case common.CRC32SignIn:
		args := slproto.SignIn{}
		err = proto.Unmarshal(slObject.Object, &args)
		if err != nil {
			log.Log().Error("unmarshal SignIn failed", zap.Error(err))
			return
		}
		reply, sessionId, err := websocketConnection.bizLogic.SignIn(&args)
		if err != nil {
			log.Log().Error("biz logic SignIn failed", zap.Error(err))
			return
		}
		replyBytes, err := proto.Marshal(reply)
		if err != nil {
			log.Log().Error("marshal reply failed", zap.Error(err))
			return
		}
		websocketConnection.connectionManager.PutConnection(reply.Id, websocketConnection)
		responseSLObject.SessionId = sessionId
		responseSLObject.Object = replyBytes
		responseSLObject.Crc32 = common.CRC32User
		responseSLObject.ReqCrc32 = slObject.Crc32
	case common.CRC32Match:
		args := slproto.Match{}
		err = proto.Unmarshal(slObject.Object, &args)
		if err != nil {
			log.Log().Error("unmarshal Match failed", zap.Error(err))
			return
		}
		reply, err := websocketConnection.bizLogic.Match(userId, &args)
		if err != nil {
			log.Log().Error("biz logic Match failed", zap.Error(err))
			return
		}
		replyBytes, err := proto.Marshal(reply)
		if err != nil {
			log.Log().Error("marshal reply failed", zap.Error(err))
			return
		}
		responseSLObject.SessionId = slObject.GetSessionId()
		responseSLObject.Object = replyBytes
		responseSLObject.Crc32 = common.CRC32Bool
		responseSLObject.ReqCrc32 = slObject.Crc32
	case common.CRC32Doll:
		args := slproto.Doll{}
		err = proto.Unmarshal(slObject.Object, &args)
		if err != nil {
			log.Log().Error("unmarshal Doll failed", zap.Error(err))
			return
		}
		reply, err := websocketConnection.bizLogic.Doll(userId, &args)
		if err != nil {
			log.Log().Error("biz logic Match failed", zap.Error(err))
			return
		}
		if reply != nil {
			replyBytes, err := proto.Marshal(reply)
			if err != nil {
				log.Log().Error("marshal reply failed", zap.Error(err))
				return
			}
			responseSLObject.SessionId = slObject.GetSessionId()
			responseSLObject.Object = replyBytes
			responseSLObject.Crc32 = common.CRC32DollResult
			responseSLObject.ReqCrc32 = slObject.Crc32
		}
	}
	responseBytes, err := proto.Marshal(responseSLObject)
	if err != nil {
		log.Log().Error("marshal response failed", zap.Error(err))
		return
	}
	err = websocketConnection.Send(responseBytes)
	if err != nil {
		log.Log().Error("send buffer failed", zap.Error(err))
		return
	}
}

func (websocketConnection *WebsocketConnection) Send(buf []byte) error {
	return websocketConnection.conn.WriteMessage(websocket.BinaryMessage, buf)
}

func (websocketConnection *WebsocketConnection) Close() error {
	return websocketConnection.conn.Close()
}

func (websocketConnection *WebsocketConnection) Conn() *websocket.Conn {
	return websocketConnection.conn
}
