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

    async updateStatus(id, status) {
        try {
            return await this.dataBaseOrder.updateStatus(id, status);
        } catch (error) {
            throw new Error(`Error updating order status: ${error.message}`);
        }
    }
}

module.exports = OrderGateway;
