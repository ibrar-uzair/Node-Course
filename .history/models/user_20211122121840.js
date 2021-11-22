
const Sequelize = require('sequelize');
const sequelize = require  ('../utils/database')

const User = sequelize.define('user', {

    userId: { type: Sequelize.INTEGER, allowNull: false, autoIncrement:true,primaryKey: true },

    userName: { type: Sequelize.STRING, allowNull: false },

    userEmail: { type: Sequelize.STRING, allowNull: false },
   
})

module.exports = User;


