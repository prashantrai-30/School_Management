const { schoolServices } = require("../services");

async function createSchool(req, res) {
    try {
        console.log("schoolcontroller");
        const school = await schoolServices.createSchool({
            name: req.body.name,
            address: req.body.address,
            longitude: req.body.longitude,
            latitude: req.body.latitude
        });
        return res.status(200).json(school);
    } catch (error) {
        return res.status(400).json(error);
    }
}

async function getAllSchool(req, res) {
    try {
        const response = await schoolServices.getAllSchool();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    createSchool,
    getAllSchool
};
