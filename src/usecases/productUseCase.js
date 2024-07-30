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

    async getAll() {
        return await this.productGateway.getAll();
    }

    async getProductsForCombo() {
        const products = await this.getAll();
        const filteredProducts = products.filter(product =>
            ["Lanche", "Acompanhamento", "Bebida"].includes(product.category)
        ).sort((a, b) => a.name.localeCompare(b.name));

        return {
            Lanche: filteredProducts.filter(product => product.category === "Lanche"),
            Acompanhamento: filteredProducts.filter(product => product.category === "Acompanhamento"),
            Bebida: filteredProducts.filter(product => product.category === "Bebida")
        };
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
