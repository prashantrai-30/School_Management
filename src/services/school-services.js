const { SchoolRepository } = require("../repositories");

function getDistance (lat1,lon1,lat2,lon2) {
    const R = 6371;
    const toRad = deg => deg *  Math.PI / 180;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

    const c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}

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

async function getAllSchool(data) {
    try {
        const schools = await SchoolRepository.getAll();

        const schoolDistance = schools.map(school => {
            const distance = getDistance(
                parseFloat(data.userLatitude),
                parseFloat(data.userLongitude),
                parseFloat(school.latitude),
                parseFloat(school.longitude)
            );
            return {...school.dataValues, distance};
        });

            schoolDistance.sort((a,b) => a.distance - b.distance);

        return schoolDistance;
    } catch (error) {
        console.log('Error while fetching school details', error);
        throw error;
    }
}

module.exports = {
    createSchool,
    getAllSchool
};
