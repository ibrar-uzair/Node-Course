// --------------------------------> Imports
const path = require("path");
const http = require("http");
const { parse } = require("path/posix");
const bodyParser = require("body-parser");
const express = require("express");
const pageNotFoundController = require("./controllers/404_controller");
const db = require("./utils/database");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const mongoConnect = require("./utils/database");
const User = require("./models/user");
const app = express();

//Mongoose
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// --------------------------------> Generic Routes

// Generic Routes always run whenever some route is changed

app.use((req, res, next) => {
  User.findById("619f5cc4d566765f0090b8ea")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use(shopRoutes);
app.use(adminRoutes);
app.use(pageNotFoundController.pageNotFound);

mongoConnect.mongoConnect(() => {
  console.log("Server is running or port 3000");
  app.listen(3000);
});

mongoose
  .connect(
    "mongodb+srv://uzair:uzair@cluster0.wgjvm.mongodb.net/shop?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
