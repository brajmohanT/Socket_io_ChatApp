const app = require("express")();
//same as
// const express = require("express");
// const app = express();

const server = require("http").createServer(app);
// same as
// const http = require("http");
// const server = http.createServer(app);

const io = require("socket.io")(server);

// here connection is an event kind of creating a connection so other can connect(connection string is given by socket io with some other string as events)
io.on("connection", (socket) =>{
    console.log("what is socket: ", socket);
    console.log("socket is active to be connected");

// connection is establish now it time to listen that event
// chat is an event named by us. you can call it whatver you want
    socket.on("chat", (payload)=>{
        console.log("what is payload: ", payload);
    // now we are listening to the event but we have to respond for the event
        
        io.emit("chat", payload)
        //responding to "chat" event and throwing all the data as we are getting(payload)
        // kind of brodcasting
        // but we can extract infomation from payload and selectively send that
        })

});

// listen

// app.listen(5000, ()=> console.log("Server is active on port number 5000...");)
// *****this is not how we do it here.

server.listen(5000, ()=>{
    console.log("Server is listening at port 5000...");
})





// from documentation

// installation
// initialize for express
// events: emitting events

// read what is socket io and more importantly what not
// read the events: whole app is based on events
// we can store our chat in any database using adapters: look at mongodb adapters