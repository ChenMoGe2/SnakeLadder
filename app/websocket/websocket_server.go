package websocket

import (
	"fmt"
	"github.com/ChenMoGe2/SnakeLadder/app/log"
	"github.com/gorilla/websocket"
	"go.uber.org/zap"
	"net/http"
)

type WebSocketServer struct {
	upgrader          websocket.Upgrader
	connectionManager *ConnectionManager
	bizLogic          *BizLogic
}

func NewWebSocketServer(address string, port int, bizLogic *BizLogic, connectionManager *ConnectionManager) *WebSocketServer {
	var upgrader = websocket.Upgrader{
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
		Subprotocols:    []string{"binary"},
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}
	webSocketServer := &WebSocketServer{
		upgrader:          upgrader,
		connectionManager: connectionManager,
		bizLogic:          bizLogic,
	}
	http.HandleFunc("/sl", webSocketServer.handle)
	err := http.ListenAndServe(fmt.Sprintf("%s:%d", address, port), nil)
	if err != nil {
		log.Log().Fatal("websocket server start failed", zap.Error(err))
	}
	return webSocketServer
}

func (websocketServer *WebSocketServer) handle(responseWriter http.ResponseWriter, request *http.Request) {
	websocketConn, err := websocketServer.upgrader.Upgrade(responseWriter, request, nil)
	if err != nil {
		log.Log().Error("Upgrade failed", zap.Any("request", request), zap.Error(err))
		return
	}
	defer websocketConn.Close()

	websocketConnection := NewWebsocketConnection(websocketConn, websocketServer.connectionManager, websocketServer.bizLogic)
	websocketServer.readLoop(websocketConnection)
}

func (websocketServer *WebSocketServer) readLoop(websocketConnection *WebsocketConnection) {
	for {
		_, buf, err := websocketConnection.Conn().ReadMessage()
		if err != nil {
			log.Log().Error("ReadMessage failed", zap.Error(err))
			return
		}
		websocketConnection.Recv(buf)
	}
}
