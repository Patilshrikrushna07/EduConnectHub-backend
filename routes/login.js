const express = require("express");
const router = express.Router();
const { memberLogin , memberRegister,checkPhoneNumber } = require("../controllers/LoginController");



router.route("/login").post(memberLogin);

router.route("/register").post(memberRegister);

router.route("/checkPhoneNumber").get(checkPhoneNumber);


module.exports = router;
