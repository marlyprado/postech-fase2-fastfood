class IOrder {
    create(orderDTO) {
        throw new Error("Method not implemented.");
    }

    getAll() {
        throw new Error("Method not implemented.");
    }

    updateStatus(id, status) {
        throw new Error("Method not implemented.");
    }
}

module.exports = IOrder;
