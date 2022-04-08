const http = require('http');
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');

const PORT = process.env.APP_PORT || 8080;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';
const ROOM_NAME = 'TESTROOM';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

io.on('connection', socket => {
  socket.on('join', room => {
    socket.join(room);
  });

  socket.on('MESSAGE:SEND', message => {
    io.in(ROOM_NAME).emit('MESSAGE:RECEIVE', message);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
