const express =require("express");
const { sendMsg } = require("../controllers/ChatController");
const router =express.Router();




router.route("send-msg").get(sendMsg)