
const { GraphQLString, GraphQLObjectType, GraphQLNonNull } = require('graphql');
const DriverType = new GraphQLObjectType({
    name: 'DriverType',
    description: "This represent an Driver",
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
        age: {type: GraphQLString}
    })
});

module.exports = DriverType;