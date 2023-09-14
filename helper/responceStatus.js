function successResponse(res,message,data) {
     res.status(200).json({
        status: "Success",
        message: message,
        data:data
    });
}

function failureResponse(res,error) {
    res.status(500).json({
       status: "Failure",
       error: error,
   });
}

module.exports = { successResponse,failureResponse};
