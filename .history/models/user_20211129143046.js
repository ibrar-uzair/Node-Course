const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      { productId: { type: Schema.ObjectId, required: true }, quantity: {} },
    ],
  },
});

// const mongodb = require("mongodb");
// const getDb = require("../utils/database").getDb;

// const ObjectId = mongodb.ObjectId;

// class User {
//   constructor(username, email) {
//     this.name = username;
//     this.email = email;
//   }

//   save() {
//     const db = getDb();
//     return db.collection("users").insertOne(this);
//   }

//   static findById(userId) {
//     const db = getDb();
//     return db
//       .collection("users")
//       .findOne({ _id: new ObjectId(userId) })
//       .then((user) => {
//         console.log(user);
//         return user;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }

// module.exports = User;
