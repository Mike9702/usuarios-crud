const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
    // Definimos las columnas aquí
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull por defecto esta en true
    },
    email: {
        type: DataTypes.STRING
        // allowNull por defecto esta en true
    },
    password: {
        type: DataTypes.STRING
        // allowNull por defecto esta en true
    },
    birthday: {
        type: DataTypes.DATEONLY
        // allowNull por defecto esta en true
    }
});

module.exports = User;