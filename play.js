// --------------------------------> Imports
const path = require("path");
const http = require("http");
const { parse } = require("path/posix");
const bodyParser = require("body-parser");
const express = require("express");
const pageNotFoundController = require("./controllers/404_controller");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const User = require("./models/user");
const isAuth = require("./middleware/is-auth");
const multer = require("multer");
const csrf = require("csurf");
const app = express();
const MONGODB_URI =
  "mongodb+srv://uzair:uzair@cluster0.wgjvm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
app.use(cookieParser());
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "session",
});
const csrfProtection = csrf();
//Mongoose
const mongoose = require("mongoose");
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ storage: fileStorage }).single("image"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

// app.use(csrfProtection);

// --------------------------------> Generic Routes

// Generic Routes always run whenever some route is changed

app.use((req, res, next) => {
  User.findById("61a4a0f86682450667c41d03")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use(shopRoutes);
app.use(adminRoutes);
app.use(authRoutes);
app.use(pageNotFoundController.pageNotFound);

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    console.log("Server started at port number 3000");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// git config user.email "ibrar.uzair@example.com"
// git config user.name "UZAIR IBRAR"
