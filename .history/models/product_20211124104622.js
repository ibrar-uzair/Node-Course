const getDb = require("../utils/database").getDb;

class Product {
  constructor(prodName, prodCategory, prodPrice, prodDescription) {
    this.prodName = prodName;
    this.prodCategory = prodCategory;
    this.prodPrice = prodPrice;
    this.prodDescription = prodDescription;
  }

  save() {
    const db = getDb();
    db.collection("products")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(result);
      });
  }
}

const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Product = sequelize.define("product", {
  prodId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  prodName: { type: Sequelize.STRING, allowNull: false },

  prodCategory: { type: Sequelize.STRING, allowNull: false },

  prodPrice: { type: Sequelize.DOUBLE, allowNull: false },

  prodDescription: { type: Sequelize.STRING, allowNull: false },
});

module.exports = Product;
