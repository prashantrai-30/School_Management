const express = require("express");
const { schoolmiddlewares } = require("../middlewares");
const { schoolController } = require("../controllers");

const router = express.Router();

router.post('/addSchool', schoolmiddlewares.validateCreateRequest, schoolController.createSchool);
router.get('/listSchools', schoolmiddlewares.validateListRequest,schoolController.getAllSchool);

module.exports = {
    schoolRoutes: router
};
