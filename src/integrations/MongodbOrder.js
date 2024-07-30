const IOrder = require("../gateways/IOrder");
const connectDB = require("./mongodb");
const mongoose = require("mongoose");

class MongodbOrder extends IOrder {
    constructor() {
        super();

        connectDB();
        const orderSchema = mongoose.Schema({
            clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
            productIds: { type: [mongoose.Schema.Types.ObjectId], ref: 'Product', required: true },
            quantity: { type: Number, required: true },
            total: { type: Number, required: true },
            status: { type: String, default: 'Recebido' },
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: Date.now }
        });
        this.order = mongoose.models.Order || mongoose.model('Order', orderSchema);
    }

    async create(orderData) {
        try {
            const newOrder = this.order(orderData);
            return await newOrder.save();
        } catch (error) {
            throw new Error(`Error creating order: ${error.message}`);
        }
    }

    async getAll() {
        try {
            return await this.order.find({})
                .populate('clientId')
                .populate('productIds');
        } catch (error) {
            throw new Error(`Error fetching orders: ${error.message}`);
        }
    }

    async updateStatus(id, status) {
        try {
            return await this.order.findByIdAndUpdate(id, { status }, { new: true });
        } catch (error) {
            throw new Error(`Error updating order status: ${error.message}`);
        }
    }
}

module.exports = MongodbOrder;
