const sendMsg = async (req, res) => {
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
