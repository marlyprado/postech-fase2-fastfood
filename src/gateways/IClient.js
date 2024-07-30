class IClient {
    createClient(clientDTO) {
        throw new Error("Method not implemented.");
    }

    isValidId(clientId) {
        throw new Error("Method not implemented.");
    }

    clientExists(clientId) {
        throw new Error("Method not implemented.");
    }
}

module.exports = IClient;
