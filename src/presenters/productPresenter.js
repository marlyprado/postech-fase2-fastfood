class ProductPresenter {
    static present(product) {
        return {
            name: product.name,
            price: product.price,
            category: product.category,
            description: product.description
        };
    }
}

module.exports = ProductPresenter;
