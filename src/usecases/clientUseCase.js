const Client = require('../entities/client');

class ClientUseCase {
    constructor(clientGateway) {
        this.clientGateway = clientGateway;
    }

    async create(clientData) {
        try {
            const newClient = this.fromDataToEntity(clientData);
            return await this.clientGateway.create(newClient);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async getAll() {
        return await this.clientGateway.getAll();
    }

    fromDataToEntity(clientData) {
        return new Client({
            cpf: clientData.cpf,
            nome: clientData.nome,
            email: clientData.email
        });
    }
}

module.exports = ClientUseCase;
