const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

MongoClient.connect(
  "mongodb+srv://uzair:uzair@my-cluster.tg3np.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
)
  .then((result) => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Database Not Connected");
  });
