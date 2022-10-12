// const express = require("express");
// import { Socket } from "dgram";
import express from "express"; //New way of writing the 1st line 근데 package.json에 "type" module? 추가
import http from "http";
import { Server } from "socket.io";

//set up the express app
const app = express();
//setup socket.io and server connection
const httpServer = http.createServer(app);
// const { Server } = require('socket.io');
const io = new Server(httpServer);

io.on("connection", function (socket) {
    //will trigger when someone connects to the server
    console.log("new friend connected")
    socket.on("move-mouse", function (mouseData) {
        socket.broadcast.emit("update-mouse-pos-for-everyone", mouseData);
        // console.log(socketID + "someone moved");
    });
});


//start hosting a web server
const port = 3000;
httpServer.listen(port, function () {
    console.log("cooking things up at port" + port);
}); //listening to a port in computer

// host some fron end html css js
app.use(express.static("public")); //load middle-ware? need file named "public"

console.log('hello! im here');

//이 위까지가 서버가 필요한 웹사이트는 꼭 있어야하는 코드임

//cursor rendering code starting
