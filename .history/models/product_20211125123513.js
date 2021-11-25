const getDb = require("../utils/database").getDb;
const mongodb = require("mongodb");

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

  static update(
    prodId,
    productName,
    productCategory,
    productPrice,
    productDescription
  ) {
    console.log(
      "Printing Product ID --------------------------------------------------"
    );
    console.log(prodId);
    const db = getDb();
    return db
      .collection("products")
      .updateOne(
        { _id: prodId },
        {
          $set: {
            prodName: prodName,
            prodCategory: productCategory,
            prodPrice: productPrice,
            prodDescription: productDescription,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(result);
      });
  }

  printValues() {
    console.log(this.prodName);
    console.log(this.prodCategory);
    console.log(this.prodPrice);
    console.log(this.prodDescription);
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(prodID) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongodb.ObjectId(prodID) })
      .next()
      .then((product) => {
        console.log(prodID);
        console.log("Printing Product");
        console.log(product);
        return product;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Product;
