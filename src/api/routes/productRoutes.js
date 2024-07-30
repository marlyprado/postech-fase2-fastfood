const express = require('express');
const ProductController = require('../../controllers/productController');
const MongodbProduct = require('../../integrations/MongodbProduct');

class ProductRouter {
    constructor() {
        this.router = express.Router();
        this.mongodbProduct = new MongodbProduct();
        this.productController = new ProductController(this.mongodbProduct);
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post('/', this.productController.createProduct.bind(this.productController));
        this.router.get('/combo', this.productController.getProductsForCombo.bind(this.productController));
    }

    getRouter() {
        return this.router;
    }
}

module.exports = new ProductRouter().getRouter();
