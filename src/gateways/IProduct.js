class IProduct {
    createProduct(clientDTO) {
        throw new Error("Method not implemented.");
    }

    getAll() {
        throw new Error("Method not implemented.");
    }

    getProductsByIds(productIds) {
        throw new Error("Method not implemented.");
    }

    validateProductIds(productIds) {
        throw new Error("Method not implemented.");
    }

    isValidId(productId) {
        throw new Error("Method not implemented.");
    }

    productsExists(productId) {
        throw new Error("Method not implemented.");
    }
}

module.exports = IProduct;
