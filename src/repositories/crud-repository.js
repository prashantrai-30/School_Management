class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            console.log("crudRepo");
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.error('Error in create:', error.message);
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.error('Error in getAll:', error.message);
            throw error;
        }
    }
}

module.exports = CrudRepository;
