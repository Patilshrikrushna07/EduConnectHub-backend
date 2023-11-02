const { successResponse, failureResponse } = require("../helper/responceStatus");

const sendMsg = async (req, res) => {
  console.log(req.params.sender_id);
  try {
    return successResponse(res, "Send Message Sucessfully", {
      statusCode: "send message",
    });
  } catch (error) {
    console.error("Error:", error);
    return failureResponse(res, error);
  }
};

module.exports = { sendMsg };
