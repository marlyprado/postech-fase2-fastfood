class ProductGateway {
    dataBaseProduct;

    constructor(dataBaseProduct) {
        this.dataBaseProduct = dataBaseProduct;
    }

    async create(productData) {
        try {
            return await this.dataBaseProduct.createProduct(productData);
        } catch (error) {
            throw new Error(`Error creating product: ${error.message}`);
        }
    }

    async getAll() {
        try {
            return await this.dataBaseProduct.getAll();
        } catch (error) {
            throw new Error(`Error fetching products: ${error.message}`);
        }
    }

    async getProductsByIds(productIds) {
        try {
            return await this.dataBaseProduct.getProductsByIds(productIds);
        } catch (error) {
            throw new Error(`Error fetching products by IDs: ${error.message}`);
        }
    }

    async validateProductIds(productIds) {
        try {
            const areValidIds = productIds.every(id => this.dataBaseProduct.isValidId(id));
            const productsExists = await this.dataBaseProduct.productsExists(productIds);

            if (!areValidIds || !productsExists) {
                throw new Error('One or more product IDs are invalid.');
            }
        } catch (error) {
            throw new Error(`Error validating product IDs: ${error.message}`);
        }
    }
}

module.exports = ProductGateway;
