const express = require("express");
const router = express.Router();
const {getUserDetails, getAllUser } = require("../controllers/MemberController");
const auth  = require("../middleware/auth");




router.route("/get-user-basic-details/:memberId").get(getUserDetails);
router.route("/get-all-user").get(getAllUser);



module.exports = router;
