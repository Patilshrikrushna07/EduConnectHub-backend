const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors'); // Import the cors middleware
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
const con = require('./connection/DbConnect.js');
const login_register_routes = require("./routes/login");
const member_routes = require("./routes/MembersRoute.js");
const chat_routes=require("./routes/Chat.js")
const setupSocketServer = require('./connection/socketServer.js');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())

app.use("/api/auth", login_register_routes);
app.use("/api", member_routes);
app.use("/api/chat", chat_routes);


const io = setupSocketServer(server);


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
