const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  prodName: {
    type: String,
    required: TextTrackCue,
  },
  prodCategory: {
    type: String,
    required: TextTrackCue,
  },
  prodPrice: {
    type: String,
    required: TextTrackCue,
  },
  prodDescription: {
    type: String,
    required: TextTrackCue,
  },
});

const getDb = require("../utils/database").getDb;
const mongodb = require("mongodb");

class Product {
  constructor(prodName, prodCategory, prodPrice, prodDescription, userId) {
    this.prodName = prodName;
    this.prodCategory = prodCategory;
    this.prodPrice = prodPrice;
    this.prodDescription = prodDescription;
    this.userId = userId;
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
    const db = getDb();
    return db
      .collection("products")
      .updateOne(
        { _id: new mongodb.ObjectId(prodId) },
        {
          $set: {
            prodName: productName,
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
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(result);
      });
  }

  static deleteProduct(prodID) {
    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: new mongodb.ObjectId(prodID) })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Product;
