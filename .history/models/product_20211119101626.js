
const Sequelize = require('sequelize');
const sequelize = require  ('../utils/database')

const Product = sequelize.define('product', {

    prodId: { type: Sequelize.INTEGER, autoIncrement:true,primaryKey: true },

    prodName: { type: Sequelize.STRING },

    prodCategory: { type: Sequelize.STRING },

    prodPrice: { type: Sequelize.STRING },

    prodDescription: { type: Sequelize.STRING }
   
})

module.exports = Product;


