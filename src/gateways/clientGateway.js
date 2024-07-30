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

    async validateClientId(clientId) {
        try {
            const isValid = this.dataBaseClient.isValidId(clientId);
            const clientExists = await this.dataBaseClient.clientExists(clientId);

            if (!isValid || !clientExists) {
                throw new Error('Client ID is invalid.');
            }
        } catch (error) {
            throw new Error(`Error validating client ID: ${error.message}`);
        }
    }
}

module.exports = ClientGateway;
