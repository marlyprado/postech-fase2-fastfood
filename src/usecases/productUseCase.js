const Product = require('../entities/product');

class ProductUseCase {
    constructor(productGateway) {
        this.productGateway = productGateway;
    }

    async create(productData) {
        try {
            const newProduct = this.fromDataToEntity(productData);
            return await this.productGateway.create(newProduct);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    fromDataToEntity(productData) {
        return new Product({
            name: productData.name,
            price: productData.price,
            category: productData.category,
            description: productData.description
        });
    }
}

module.exports = ProductUseCase;
