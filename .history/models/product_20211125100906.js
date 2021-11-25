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
    return db
      .collection("products")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(result);
      });
  }

  fetchAll() {
    const db = getDb();

    return db
      .collection("products")
      .find()
      .toArray(function (err, products) {
        if (err) throw err;
        console.log(products);
        return products;
      });
  }
}

module.exports = Product;
