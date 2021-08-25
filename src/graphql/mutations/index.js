var { addDriver, updateDriver, deleteDriver } = require('./DriverMutation');
var { createOrder, updateOrder, deleteOrder} = require('./OrderMutation')

module.exports = {
    addDriver,
    updateDriver,
    deleteDriver,
    createOrder,
    updateOrder,
    deleteOrder
}