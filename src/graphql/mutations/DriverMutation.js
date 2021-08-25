var {GraphQLNonNull, GraphQLString} = require('graphql');
var DriverType = require('../queries/DriverType');
var Driver = require('../../models/Driver')

const addDriver = {
    type: DriverType,
    args: {
        name: {
            name: 'name',
            type: new GraphQLNonNull(GraphQLString)
        },
        phone: {
            name: 'phone',
            type: new GraphQLNonNull(GraphQLString)
        },
        age: {
            name: 'age',
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            name: 'email',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, params) {
        const uModel = new Driver(params);
        const newDriver = await uModel.save();
        if(!newDriver) {
            throw new Error('Error')
        }
        return newDriver
    }
}

const updateDriver = {
    type: DriverType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        },
        name: {
            name: 'name',
            type: GraphQLString
        },
        email: {
            name: 'email',
            type: GraphQLString
        },
        age: {
            name: 'age',
            type: GraphQLString
        },
        phone: {
            name: 'phone',
            type: GraphQLString
        }
    },
    resolve: async function(root, param) {
       let updateDriver = {};
       if(param.name) {
           updateDriver.name = param.name
       }
       if(param.email) {
           updateDriver.email = param.email
       }
       if(param.age) {
          updateDriver.age = param.age
        }
        if(param.phone) {
          updateDriver.phone = param.phone
        }
       const uDriver = await Driver.findByIdAndUpdate(param._id, updateDriver, {new: true})
       console.log(uDriver)
       if(!uDriver) {
           throw new Error('Error')
       }
       return uDriver
    }
}

const deleteDriver = {
    type: DriverType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async function (root, param) {
      const deleteDriver =  await Driver.findByIdAndRemove(param._id)
      if(!deleteDriver) {
         throw new Error('Error');
      }
      return deleteDriver
    }
}
module.exports = {addDriver, updateDriver, deleteDriver}