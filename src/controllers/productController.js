const ProductGateway = require('../gateways/productGateway');
const ProductPresenter = require("../presenters/productPresenter");
const ProductUseCase = require("../usecases/productUseCase");

class ProductController {
    productUseCase;
    productGateway;

    constructor(dataBaseProduct) {
        this.productGateway = new ProductGateway(dataBaseProduct);
        this.productUseCase = new ProductUseCase(this.productGateway);
    }

    async createProduct(req, res) {
        try {
            const productData = req.body;

            const savedProduct = await this.productUseCase.create(productData);

            const presentedProduct = ProductPresenter.present(savedProduct);
            res.status(201).json(presentedProduct);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getProductsForCombo(req, res) {
        try {
            const categorizedProducts = await this.productUseCase.getProductsForCombo();
            res.json(categorizedProducts);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = ProductController;
