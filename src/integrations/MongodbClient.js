const IClient = require("../gateways/IClient");
const connectDB = require("./mongodb");
const mongoose = require("mongoose");

class MongodbClient extends IClient {
    constructor() {
        super();

        connectDB();
        const clientSchema = mongoose.Schema({
            cpf: { type: String, required: true },
            nome: { type: String, required: true },
            email: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now }
        });
        this.client = mongoose.model('Client', clientSchema);
    }

    createClient(clientModel) {
        try {
            const newClient = this.client(clientModel);
            return newClient.save();
        } catch (error) {
            return Promise.reject(new Error(`Error creating client: ${error.message}`));
        }
    }
}

module.exports = MongodbClient;
