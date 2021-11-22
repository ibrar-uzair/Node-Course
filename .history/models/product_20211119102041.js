
const Sequelize = require('sequelize');
const sequelize = require  ('../utils/database')

const Product = sequelize.define('product', {

    prodId: { type: Sequelize.INTEGER, allowNull: false, autoIncrement:true,primaryKey: true },

    prodName: { type: Sequelize.STRING, allowNull: false },

    prodCategory: { type: Sequelize.STRING, allowNull: false },

    prodPrice: { type: Sequelize.DOUBLE, allowNull: false },

    prodDescription: { type: Sequelize.STRING, allowNull: false }
   
})

module.exports = Product;


