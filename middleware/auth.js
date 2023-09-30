const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    console.log(token);
    if (token) {
      console.log("Hello shri");
      token = token.split(" ")[1];
      console.log(token);
      let Member = jwt.verify(token, "sha12");
      console.log("member",Member);
      req.member_id = Member.member.id;
    } else {
      return res
        .status(404)
        .json({ status: false, message: "Member Details Not Found!" });
    }
    next();
  } catch {}
};
module.exports = auth;
