import express from "express"
import { WebSocketServer } from "ws"

const app = express();
const port = 8080;

const server = app.listen(port, ()=>{
    console.log("Server is listining...")
})

//http and websocket server run on same port - if we want change the port then we can use {port: 3000} instead of {server}
const wss = new WebSocketServer({server});

wss.on("connection", (ws)=>{
    ws.on("message", (data)=>{
        console.log("data from client %s", data);
        ws.send("thanks buddy")
    })
})