const { GraphQLList, GraphQLObjectType } = require('graphql');
const Driver = require('../../models/Driver')
const Order = require('../../models/Order')
const OrderType = require('./OrderType');
const DriverType = require('./DriverType')

const BlogQueryRootType = new GraphQLObjectType ({
    name: 'BlogAppSchema',
    description: "Blog Application Schema Query Root",
    fields: () => ({
        drivers: {
            type: new GraphQLList(DriverType),
            description: "List of all Drivers",
            resolve: async function () {
              return await  Driver.find({}, (err, auth) => {
              });
            }
        },
        Orders: {
            type: new GraphQLList(OrderType),
            description: "List of all Orders",
            resolve: async function () {
               var Orders = await  Order.find({})
               return Orders;
            }
        }
    })
});

module.exports = BlogQueryRootType