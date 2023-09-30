const express = require("express");
const router = express.Router();
const {getUserDetails, getAllUser, getLoginUserDetails } = require("../controllers/MemberController");
const auth  = require("../middleware/auth");




router.route("/get-user-basic-details/:memberId").get(auth,getUserDetails);
router.route("/get-login-user-details").get(auth,getLoginUserDetails);

router.route("/get-all-user").get(getAllUser);


module.exports = router;
