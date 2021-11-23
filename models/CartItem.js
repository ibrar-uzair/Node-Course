
const Sequelize = require('sequelize');
const sequelize = require  ('../utils/database')

const CartItem = sequelize.define('cartitem', {

    id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement:true,primaryKey: true },

    quantity: { type: Sequelize.INTEGER},

})

module.exports = CartItem;


