const OrderGateway = require('../gateways/orderGateway');
const ProductGateway = require('../gateways/productGateway');
const ClientGateway = require('../gateways/clientGateway');
const OrderUseCase = require("../usecases/orderUseCase");

class OrderController {
    orderUseCase;
    orderGateway;

    constructor(dataBaseOrder, dataBaseProduct, dataBaseClient) {
        this.orderGateway = new OrderGateway(dataBaseOrder);
        this.productGateway = new ProductGateway(dataBaseProduct);
        this.clientGateway = new ClientGateway(dataBaseClient);
        this.orderUseCase = new OrderUseCase(this.orderGateway, this.productGateway, this.clientGateway);
    }

    async create(req, res) {
        try {
            const { clientId, productIds, quantity } = req.body;
            const order = await this.orderUseCase.create(clientId, productIds, quantity);
            res.status(201).json(order);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getAll(req, res) {
        try {
            const orders = await this.orderUseCase.getAll();
            res.json(orders);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = OrderController;
