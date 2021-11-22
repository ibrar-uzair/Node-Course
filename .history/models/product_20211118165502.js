
const Sequelize = require('sequelize');
const sequelize = require  ('../utils/database')

const Product = sequelize.define('product', {

    id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement:true },

    title: { type: Sequelize.STRING, allowNull: false },
   
})

module.exports = Product;