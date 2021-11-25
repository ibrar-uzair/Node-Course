// --------------------------------> Imports
const path = require("path");
const http = require("http");
const { parse } = require("path/posix");
const bodyParser = require("body-parser");
const express = require("express");
const pageNotFoundController = require("./controllers/404_controller");
const db = require("./utils/database");
const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");
const mongoConnect = require("./utils/database");
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// --------------------------------> Generic Routes

// Generic Routes always run whenever some route is changed

app.use((req, res, next) => {
  // User.findByPk(1)
  //   .then((user) => {
  //     console.log(user);
  //     req.user = user;
  //     next();
  //   })
  //   .catch((err) => console.log(err));
});

// app.use(shopRoutes);
app.use(adminRoutes);
// app.use(pageNotFoundController.pageNotFound);

.mongoConnect.mongoConnect(() => {
  app.listen(3000);
});
