const validStatuses = ['Recebido', 'Em preparação', 'Pronto', 'Finalizado'];

class Order {
    constructor({ id, clientId, productIds, quantity, total, status, createdAt, updatedAt }) {
        this.validateStatus(status);

        this.id = id;
        this.clientId = clientId;
        this.productIds = productIds;
        this.quantity = quantity;
        this.total = total;
        this.status = status || 'Recebido';
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt || new Date();
    }

    update(data) {
        this.validateStatus(data.status);

        Object.assign(this, data);
        this.updatedAt = new Date();
    }

    validateStatus(status) {
        if (!validStatuses.includes(status)) {
            throw new Error(`Status inválido: ${status}. Os status válidos são: ${validStatuses.join(", ")}`);
        }
    }
}

module.exports = Order;
