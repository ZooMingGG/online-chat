const http = require('http');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { Server } = require('socket.io');

const { sequelize } = require('./database/models');

const { CLIENT_URL, SERVER_PORT } = process.env;
const ROOM_NAME = 'TESTROOM';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});
const upload = multer();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on('connection', socket => {
  socket.on('join', room => {
    socket.join(room);
  });

  socket.on('MESSAGE:SEND', message => {
    io.in(ROOM_NAME).emit('MESSAGE:RECEIVE', message);
  });
});

sequelize
  .authenticate()
  .then(() => {
    server.listen(+SERVER_PORT, () => {
      console.log(`Server running on port: ${SERVER_PORT}`);
    });
  })
  .catch(err => {
    console.error('An error occurred during connection to the database', err);
  });
