const { GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql');
const driver = require('../../models/Driver');
const driverType = require('./DriverType');
const mongoose = require('mongoose');
const OrderType = new GraphQLObjectType({
    name: 'OrderType',
    description: "This is resent Order",
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        origin: {type: GraphQLString},
        destination: {type: GraphQLString},
        delivery_date: {type: GraphQLString},
        driver_id: {type: GraphQLString},
        driver: {type: driverType, resolve: async function (Order) {
            var drivers =  await  driver.findById(mongoose.Types.ObjectId(Order.driver_id))
            return drivers
        }}

    })
});

module.exports = OrderType