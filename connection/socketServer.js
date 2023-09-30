const socketIo = require('socket.io');

function setupSocketServer(httpServer) {
  const io = socketIo(httpServer, {
    pingTimeout: 60000,
    cors: {
      origin:'*'
    },
  });

  io.on('connection', (socket) => {
    console.log("connected to socket.io");
    socket.on("setup", (userData) => {
        socket.join(userData._id);
        console.log("User Joined " + userData._id);
        socket.emit("connected");
      });

      socket.on("join chat", (room) => {
        socket.join(room);
        console.log("User joined room : " + room);
      });

      socket.on("new message", (message) => {
        console.log("_______________message => " + message);
      });
      socket.off("setup", (userData) => {
        console.log("socket disconnected");
        socket.leave(userData._id);
      });    
  });

  return io; 
}

module.exports = setupSocketServer;
