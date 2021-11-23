
const Sequelize = require('sequelize');
const sequelize = require  ('../utils/database')

const Cart = sequelize.define('cart', {

    id: { type: Sequelize.STRING, allowNull: false, autoIncrement:true,primaryKey: true },

})

module.exports = Cart;


