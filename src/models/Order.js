const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    driver_id: Schema.Types.ObjectId,
    name: String,
    origin: String,
    destination: String,
    delivery_date: String,
});

const order = mongoose.model('order', orderSchema);

module.exports = order;