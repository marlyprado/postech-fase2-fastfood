const IClient = require("../gateways/IClient");
const connectDB = require("./mongodb");
const mongoose = require("mongoose");

class MongodbClient extends IClient {
    constructor() {
        super();

        connectDB();
        const clientSchema = mongoose.Schema({
            cpf: { type: String, required: false },
            nome: { type: String, required: true },
            email: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now }
        });
        this.client = mongoose.models.Client || mongoose.model('Client', clientSchema);
    }

    createClient(clientModel) {
        try {
            const newClient = this.client(clientModel);
            return newClient.save();
        } catch (error) {
            return Promise.reject(new Error(`Error creating client: ${error.message}`));
        }
    }

    async getAll() {
        try {
            return await this.client.find({});
        } catch (error) {
            throw new Error(`Error fetching clients: ${error.message}`);
        }
    }

    isValidId(id) {
        return mongoose.Types.ObjectId.isValid(id);
    }

    async clientExists(clientId) {
        try {
            return await this.client.exists({ _id: clientId });
        } catch (error) {
            throw new Error(`Error checking if client exists: ${error.message}`);
        }
    }
}

module.exports = MongodbClient;
