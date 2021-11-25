const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://uzair:uzair@cluster0.wgjvm.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Database Connected");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log("Database Not Connected");
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database Found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
