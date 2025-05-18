// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

const rooms = {}; // { roomId: { socketId: { userId, name } } }

io.on('connection', (socket) => {
  console.log('New socket connected:', socket.id);

  socket.on('join-room', ({ roomId, userId, name }) => {
    socket.join(roomId);
    if (!rooms[roomId]) rooms[roomId] = {};
    rooms[roomId][socket.id] = { userId, name };

    // Notify new user about existing users in room
    const otherUsers = Object.keys(rooms[roomId]).filter(id => id !== socket.id);
    socket.emit('all-users', otherUsers.map(id => ({ socketId: id, ...rooms[roomId][id] })));

    // Notify others about the new user
    socket.to(roomId).emit('user-joined', { socketId: socket.id, userId, name });

    console.log(`${name} joined room ${roomId}`);
  });

  socket.on('signal', ({ to, from, data }) => {
    io.to(to).emit('signal', { from, data });
  });

  socket.on('disconnect', () => {
    // Remove user from rooms
    for (const roomId in rooms) {
      if (rooms[roomId][socket.id]) {
        const user = rooms[roomId][socket.id];
        delete rooms[roomId][socket.id];
        socket.to(roomId).emit('user-left', { socketId: socket.id, userId: user.userId });
        console.log(`${user.name} left room ${roomId}`);
        if (Object.keys(rooms[roomId]).length === 0) {
          delete rooms[roomId];
        }
        break;
      }
    }
  });
});

server.listen(4000, () => {
  console.log('Signaling server running on port 4000');
});
