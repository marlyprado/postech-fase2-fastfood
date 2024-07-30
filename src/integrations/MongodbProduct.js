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

        this.product = mongoose.models.Product || mongoose.model('Product', productSchema);
    }

    createProduct(productModel) {
        try {
            const newProduct = this.product(productModel);
            return newProduct.save();
        } catch (error) {
            return Promise.reject(new Error(`Error creating product: ${error.message}`));
        }
    }

    async getAll() {
        try {
            return await this.product.find({});
        } catch (error) {
            throw new Error(`Error fetching products: ${error.message}`);
        }
    }

    async getProductsByIds(productIds) {
        try {
            return await this.product.find({ _id: { $in: productIds } });
        } catch (error) {
            throw new Error(`Error fetching products by IDs: ${error.message}`);
        }
    }

    isValidId(id) {
        return mongoose.Types.ObjectId.isValid(id);
    }

    async productsExists(productIds) {
        try {
            return await this.product.exists({ _id: { $in: productIds } });
        } catch (error) {
            throw new Error(`Error checking if products exists: ${error.message}`);
        }
    }
}

module.exports = MongodbProduct;
