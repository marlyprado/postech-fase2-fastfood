const Client = require('../entities/client');

class ClientGateway {
    dataBaseClient;

    constructor(dataBaseClient) {
        this.dataBaseClient = dataBaseClient;
    }

    async create(clientData) {
        try {
            return await this.dataBaseClient.createClient(clientData);
        } catch (error) {
            throw new Error(`Error creating client: ${error.message}`);
        }
    }
}

module.exports = ClientGateway;
