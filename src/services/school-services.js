const { SchoolRepository } = require("../repositories");

async function createSchool(data) {
    try {
        console.log("school service");
        const school = await SchoolRepository.create(data);
        return school;
    } catch (error) {
        console.log('Error while creating school', error);
        throw error;
    }
}

async function getAllSchool() {
    try {
        const schools = await SchoolRepository.getAll();
        return schools;
    } catch (error) {
        console.log('Error while fetching school details', error);
        throw error;
    }
}

module.exports = {
    createSchool,
    getAllSchool
};
