const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://uzair:uzair@cluster0.wgjvm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
    .then((resclientult) => {
      console.log("Connected");
      callback(client);
    })
    .catch((err) => {
      console.log("Database Not Connected");
    });
};
