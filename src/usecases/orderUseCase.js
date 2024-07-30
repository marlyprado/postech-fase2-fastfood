class OrderUseCase {
    constructor(orderGateway, productGateway, clientGateway) {
        this.orderGateway = orderGateway;
        this.productGateway = productGateway;
        this.clientGateway = clientGateway;
    }

    async create(clientId, productIds, quantity) {
        try {
            await this.clientGateway.validateClientId(clientId);
            await this.productGateway.validateProductIds(productIds);

            const products = await this.productGateway.getProductsByIds(productIds);
            const total = this.calculateTotal(products, quantity)

            const orderData = { clientId, productIds, quantity, total };
            return await this.orderGateway.create(orderData);
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async getAll() {
        try {
            const orders = await this.orderGateway.getAll();
            const filteredOrders = orders.filter(order => order.status !== 'Finalizado');

            const statusOrder = {
                'Pronto': 1,
                'Em preparação': 2,
                'Recebido': 3
            };

            filteredOrders.sort((a, b) => {
                if (statusOrder[a.status] !== statusOrder[b.status]) {
                    return statusOrder[a.status] - statusOrder[b.status];
                }
                return new Date(a.createdAt) - new Date(b.createdAt);
            });

            return filteredOrders;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    calculateTotal(products, quantity) {
        return products.reduce((sum, product) => {
            const price = parseFloat(product.price);
            const qty = parseFloat(quantity);
            if (isNaN(qty)) {
                throw new Error('Invalid quantity.');
            }
            return sum + (price * qty);
        }, 0);
    }
}

module.exports = OrderUseCase;
