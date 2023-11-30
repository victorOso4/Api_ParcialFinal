const { Sequelize } = require('sequelize');
const defineModels = require('../db/models/index')

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    host: '127.0.0.1',
    port: '5432',
    username: 'postgres',
    'password': '9901',
    'database': 'motorcycles',
    dialect: 'postgres'
});

defineModels( sequelize )

sequelize.sync()

module.exports = sequelize