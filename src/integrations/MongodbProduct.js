const IProduct = require("../gateways/IProduct");
const connectDB = require("./mongodb");
const mongoose = require("mongoose");

class MongodbProduct extends IProduct {
    constructor() {
        super();

        connectDB();
        const productSchema = mongoose.Schema({
            name: { type: String, required: true },
            price: { type: Number, required: true },
            category: { type: String, required: true },
            description: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now }
        });
        this.product = mongoose.model('Product', productSchema);
    }

    createProduct(productModel) {
        try {
            const newProduct = this.product(productModel);
            return newProduct.save();
        } catch (error) {
            return Promise.reject(new Error(`Error creating product: ${error.message}`));
        }
    }
}

module.exports = MongodbProduct;
