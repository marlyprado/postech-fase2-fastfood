const Client = require('../entities/client');

class ClientGateway {
    dataBaseClient;

    constructor(dataBaseClient) {
        this.dataBaseClient = dataBaseClient;
    }

    async create(clientData) {
        const savedClient = this.dataBaseClient.createClient(clientData);
        return this.fromModelToEntity(savedClient);
    }

    fromModelToEntity(clientModel) {
        return new Client({
            id: clientModel._id,
            cpf: clientModel.cpf,
            nome: clientModel.nome,
            email: clientModel.email,
            createdAt: clientModel.createdAt,
            updatedAt: clientModel.updatedAt
        });
    }
}

module.exports = ClientGateway;
