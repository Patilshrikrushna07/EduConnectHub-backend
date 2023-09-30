const con = require("../connection/DbConnect");
const yup = require("yup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  successResponse,
  failureResponse,
} = require("../helper/responceStatus");
const Member = require("../models/Member");

const memberLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const member = await Member.findOne({ where: { email: email }}); 
    if (!member) {
      return res.status(400).json({ status: false, message: "Member not found" }); 
    }

    const comparePassword = await bcrypt.compare(password, member.password);
    if (comparePassword) {
      const token = jwt.sign(
        {
          member:member,
        },
        "sha12"
      );
      return res.status(200).json({ memberId: member.id, token: token });
    } else {
      return res
        .status(400)
        .json({ status: false, message: "Password does not match" });
    }
  } catch (error) {
    console.error("Error:", error);
    return failureResponse(res, error);
  }
};


const memberRegister = async (req, res) => {
  try {
    const saltRounds = 10;
    const password = req.body.password;
    bcrypt.genSalt(saltRounds, async (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {
        const hasPassword = hash;
        try {
          const newMember = await Member.create({
            fname: req.body.fname,
            lname: req.body.lname,
            mobile_number: req.body.mobile_number,
            email: req.body.email,
            password: hasPassword,
            country_code: "91",
          });
          const token = jwt.sign(
            {
              member:newMember
            },
            "sha12"
          );
          return res.status(200).json({ member: newMember, token: token });
        } catch (error) {
          console.error("Error:", error);
          return failureResponse(res, error);
        }
      });
    });
  } catch (error) {
    console.error("Error:", error);
    return failureResponse(res, error);
  }
};

const checkPhoneNumber = async (req, res) => {
  try {
    const member = await Member.findOne({
      where: {
        email: req.query.email,
      },
    });
    if (member) {
      return successResponse(res, "Member is Already Register", {
        exists: true,
        type: "password",
        statusCode: "Verified User",
        userName: member.fname,
      });
    } else {
      return successResponse(res, "New Member Registration", {
        exists: false,
        type: "otp_type",
        statusCode: "User Not Verified",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return failureResponse(res, error);
  }
};

module.exports = { memberLogin, memberRegister, checkPhoneNumber };
