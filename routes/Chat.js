const express = require("express");
const router = express.Router();
const {sendMsg} = require("../controllers/ChatController");
const auth = require("../middleware/auth");

router.get("/send-message", sendMsg);

module.exports = router;
