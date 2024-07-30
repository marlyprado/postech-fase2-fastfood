class OrderGateway {
    constructor(dataBaseOrder) {
        this.dataBaseOrder = dataBaseOrder;
    }

    async create(orderData) {
        try {
            return await this.dataBaseOrder.create(orderData);
        } catch (error) {
            throw new Error(`Error creating order: ${error.message}`);
        }
    }

    async getAll() {
        try {
            return await this.dataBaseOrder.getAll();
        } catch (error) {
            throw new Error(`Error fetching orders: ${error.message}`);
        }
    }
}

module.exports = OrderGateway;
