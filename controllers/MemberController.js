const con = require("../connection/DbConnect");
const yup = require("yup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  successResponse,
  failureResponse,
} = require("../helper/responceStatus");
const Member = require("../models/Member");
const { memberDetailsResource, publicMemberDetailsResource } = require("../Resource/memberDetailsResource");

const getLoginUserDetails = async (req, res) => {
  const  member_id  = req.member_id;
  try {
    if (req.query.type) {
      const member = await Member.findOne({ where: { id: member_id } });
      return successResponse(
        res,
        "Public Member Details fetch Sucessfully!",
        publicMemberDetailsResource(member) 
      );
    } else {
      const member = await Member.findOne({ where: { id: member_id } });
      if (member) {
        return successResponse(
          res,
          "Member Details fetch Sucessfully!",
          memberDetailsResource(member)
        );
      } else {
        return res
          .status(400)
          .json({ status: false, message: "Member Details Not Found!" });
      }
    }
  } catch (error) {
    console.error("Error:", error);
    return failureResponse(res, error);
  }
};
const getUserDetails = async (req, res) => {
  console.log(req.params.memberId);
  const  member_id  = req.params.memberId;
  try {
    if (req.query.type) {
      const member = await Member.findOne({ where: { id: member_id } });
      return successResponse(
        res,
        "Public Member Details fetch Sucessfully!",
        publicMemberDetailsResource(member) 
      );
    } else {
      const member = await Member.findOne({ where: { id: member_id } });
      if (member) {
        return successResponse(
          res,
          "Member Details fetch Sucessfully!",
          memberDetailsResource(member)
        );
      } else {
        return res
          .status(400)
          .json({ status: false, message: "Member Details Not Found!" });
      }
    }
  } catch (error) {
    console.error("Error:", error);
    return failureResponse(res, error);
  }
};

const getAllUser = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  try {
    const members = await Member.findAndCountAll({
      limit,
      offset,
    });

    const currentPage = page;

    return successResponse(
      res,
      "Public Member Details fetched Successfully!",
      {
        members: members.rows, 
        currentPage, 
        totalCount: members.count, 
        totalPages: Math.ceil(members.count / limit),
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return failureResponse(res, error);
  }
};

module.exports = { getUserDetails,getAllUser,getLoginUserDetails };
