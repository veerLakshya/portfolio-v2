package server

import "github.com/gorilla/websocket"

type broadcastMsg struct {
	Message map[string]interface{}
	RoomId  string
	C       *websocket.Conn
}

var broadcast = make(chan broadcastMsg)

func broadcaster() {

}
