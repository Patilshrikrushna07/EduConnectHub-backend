const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let Member = jwt.verify(token, "sha12");
      console.log(Member[id]);
      req.member_id = Member.id;
    } else {
      return res
        .status(404)
        .json({ status: false, message: "Member Details Not Found!" });
    }
    next();
  } catch {}
};
module.exports = auth;
