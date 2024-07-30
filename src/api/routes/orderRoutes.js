const express = require('express');
const OrderController = require('../../controllers/orderController');
const MongodbOrder = require('../../integrations/MongodbOrder');
const MongodbClient = require('../../integrations/MongodbClient');
const MongodbProduct = require('../../integrations/MongodbProduct');

class OrderRouter {
    constructor() {
        this.router = express.Router();
        this.mongodbOrder = new MongodbOrder();
        this.mongodbClient = new MongodbClient();
        this.mongodbProduct = new MongodbProduct();
        this.orderController = new OrderController(this.mongodbOrder, this.mongodbProduct, this.mongodbClient);
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', this.orderController.getAll.bind(this.orderController));
        this.router.post('/', this.orderController.create.bind(this.orderController));
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new OrderRouter().getRouter();
