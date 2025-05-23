const CrudRepository = require("./crud-repository");
const db = require("../models");

class SchoolRepository extends CrudRepository {
    constructor() {
        super(db.School);
    }
}

module.exports = SchoolRepository;
