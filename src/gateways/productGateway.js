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
}

module.exports = ProductGateway;
