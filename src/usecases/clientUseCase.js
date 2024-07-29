const Client = require('../entities/client');

class ClientUseCase {
    constructor(clientGateway) {
        this.clientGateway = clientGateway;
    }

    async create(clientData) {
        try {
            const newClient = new Client(clientData);
            return await this.clientGateway.create(newClient);
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

module.exports = ClientUseCase;
