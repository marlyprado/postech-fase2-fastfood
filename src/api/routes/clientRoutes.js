const express = require('express');
const ClientController = require('../../controllers/clientController');
const MongodbClient = require('../../integrations/MongodbClient');

class ClientRouter {
    constructor() {
        this.router = express.Router();
        this.mongodbClient = new MongodbClient();
        this.clientController = new ClientController(this.mongodbClient);
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post('/', this.clientController.createClient.bind(this.clientController));
        this.router.get('/', this.clientController.getAll.bind(this.clientController)); // Nova rota
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new ClientRouter().getRouter();
