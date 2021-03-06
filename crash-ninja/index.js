const express = require("express");
const socket = require("socket.io");

// App setup
const app = express();
const port = 4000;
const server = app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

// Static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);

io.on('connection', socket => {
  console.log('made socket connection', socket.id);

  // Handle chat event
  socket.on('chat', data => {
    io.sockets.emit('chat', data);
  });

  // Handle typing event
  socket.on('typing', data => {
    socket.broadcast.emit('typing', data);
  });

});