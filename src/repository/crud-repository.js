class crudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error};
        }
    }
    
    async destroy(modelId) {
        try {
            const result = await this.model.destroy({
                where : {
                    id : modelId
                }
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error};
        }
    }
    
    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error};
        }
    }

    async getAll(modelId) {
        try {
            const result = await this.model.findAll(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error};
        }
    }

    async update(modelId, data) {
        try {
            const result = await this.mod0el.update(data, {
                 where : {
                    id : modelId
                 },
            });
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repository");
            throw {error};
        }
    }
}

module.exports = crudRepository;