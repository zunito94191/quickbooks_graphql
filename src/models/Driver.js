const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
    name: { type: String },
    email: {type: String, required: true, unique: true},
    age:{ type: String },
    phone: {type: String},
});

const driver = mongoose.model('driver', driverSchema);

module.exports = driver;
