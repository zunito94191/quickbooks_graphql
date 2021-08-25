var {GraphQLNonNull, GraphQLString} = require('graphql')
var Order = require('../../models/Order');
var OrderType = require('../queries/DriverType');

const createOrder = {
    type: OrderType,
    args: {
        origin: {
            name: "origin",
            type: new GraphQLNonNull(GraphQLString)
        },
        driver_id: {
            name: "driver_id",
            type: new GraphQLNonNull(GraphQLString)
        },
        destination: {
            name: "destination",
            type: new GraphQLNonNull(GraphQLString)
        },
        delivery_date: {
            name: "delivery_date",
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function(root, param) {
        const OrderModel = new Order(param);
        const saveOrder = await OrderModel.save();
        if(!saveOrder) {
            throw new Error('Error')
        }
        return saveOrder;
    }
}

const updateOrder = {
    type: OrderType,
    args: {
        _id: {
            name: "_id",
            type: new GraphQLNonNull(GraphQLString)
        },
        origin: {
            name: "origin",
            type: GraphQLString
        },
        driver_id: {
            name: "driver_id",
            type: GraphQLString
        },
        destination: {
            name: "destination",
            type: GraphQLString
        },
        delivery_date: {
            name: "delivery_date",
            type: GraphQLString
        }
    },
    resolve: async function (root, param) {
       let updateOrder = {};
       if(param.origin) {
           updateOrder.origin = param.origin;
       }
       if(param.driver_id) {
        updateOrder.driver_id = param.driver_id;
        }
       if(param.name) {
           updateOrder.name = param.name
       }
       if(param.age) {
        updateOrder.age = param.age
        }
        if(param.email) {
        updateOrder.email = param.email
        }

       if(param.body) { 
           updateOrder.body = param.body
        }

        const updateOrderInfo = await Order.findByIdAndUpdate(param._id,updateOrder,{new: true});

        if(!updateOrderInfo) {
            throw new Error('Error');
        }
        return updateOrderInfo;
    }
}

const deleteOrder = {
    type: OrderType,
    args: {
        _id: {
            name: "_id",
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, param) {
        const deleteOrder = await Order.findByIdAndRemove(param._id);
        if(deleteOrder) {
            throw new Error('Error');
        }
        return deleteOrder;
    }
}

module.exports = {createOrder, updateOrder, deleteOrder}