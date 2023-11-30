const { DataTypes } = require('sequelize');

function defineMotorcycle( sequelize ) {
    sequelize.define('motorcycle', { 
        //Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        placa : {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand : {
            type: DataTypes.STRING,
            allowNull: false
        },
        displacement : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        color : {
            type: DataTypes.STRING,
            allowNull: false
        },
        model : {
            type: DataTypes.DATE,
            allowNull: false
        },
        isExport : {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

    }, {
        //Other model options go here
        timestamps: false
    });
}

module.exports = defineMotorcycle;   