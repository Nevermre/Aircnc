const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const path = require('path')
const cors = require("cors")
const socketio = require('socket.io')
const http = require('http')

const connectedUsers={}

const app = express();
const server = http.Server(app)
const io = socketio(server)

io.on('connection', socket =>{
    socket.emit('hello','world')
    const{user_id} = socket.handshake.query

    connectedUsers[user_id] = socket.id

})

app.use((req,res,next)=>{
    req.io=io
    req.connectedUsers=connectedUsers

    return next()
})

mongoose.connect('mongodb+srv://invictus:112233re@semana-n5upp.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')))
app.use(routes);

server.listen(3333);

