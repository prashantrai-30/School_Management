function validateCreateRequest(req, res, next) {
    console.log("school middleware");
    
    if (!req.body.name) {
        return res.status(400).json({
            message: "something went wrong while creating school",
            error: "name is not found in incoming request"
        });
    }
    if (!req.body.address) {
        return res.status(400).json({
            message: "something went wrong while creating school",
            error: "address is not found in incoming request"
        });
    }
    if (!req.body.longitude) {
        return res.status(400).json({
            message: "something went wrong while creating school",
            error: "longitude is not found in incoming request"
        });
    }
    if (!req.body.latitude) {
        return res.status(400).json({
            message: "something went wrong while creating school",
            error: "latitude is not found in incoming request"
        });
    }
    
    next();
}

module.exports = {
    validateCreateRequest
};
