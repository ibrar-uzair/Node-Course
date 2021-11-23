
const Sequelize = require('sequelize');
const sequelize = require  ('../utils/database')

const Product = sequelize.define('product', {

    id: { type: Sequelize.STRING, allowNull: false, autoIncrement:true,primaryKey: true },

    quantity: { type: Sequelize.INTEGER},
    
})

module.exports = Product;


