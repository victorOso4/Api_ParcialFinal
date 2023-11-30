const defineMotorcycle = require("./motorcycles.model");

function defineModels( sequelize ){
    defineMotorcycle(sequelize)
    //Other models go here
}

module.exports = defineModels