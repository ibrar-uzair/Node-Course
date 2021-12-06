const User = require("../models/user");
const bcrypt = require("bcryptjs");

const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        "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",
    },
  })
);

exports.displayLoginPage = (req, res, next) => {
  var isLoggedIn = false;
  const allCookies = req.get("Cookie");
  if (allCookies) {
    var splittedString = allCookies.split(";");
    for (let i = 0; i < splittedString.length; i++) {
      if (splittedString[i].includes("isLoggedIn")) {
        var foundString = splittedString[i].split("=");
        isLoggedIn = foundString[1];
      }
    }
  }
  res.render("./auth/login.ejs", {
    isLoggedIn: isLoggedIn,
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.redirect("/login");
      }
      bcrypt.compare(password, user.password).then((doMatch) => {
        if (doMatch) {
          req.session.isLoggedIn = true;
          req.session.user = user;
          console.log("Matched");
          return req.session.save((err) => {
            console.log(err);
            res.redirect("/");
          });
        }
        res.redirect("/login");
      });
    })

    .catch((err) => {
      console.log(err);
    });
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  console.log(email);
  console.log(password);
  console.log(confirmPassword);

  User.findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {
        return res.redirect("/signup");
      }
      return bcrypt
        .hash(password, 12)
        .then((hashPassword) => {
          const user = new User({
            email: email,
            password: hashPassword,
            cart: { items: [] },
          });
          return user.save();
        })
        .then((result) => {
          res.redirect("/login");
          return transporter.sendMail({
            to: email,
            from: "uxair.ibrar@gmail.com",
            subject: "Signup succeeded!",
            html: "<h1>You successfully signed up!</h1>",
          });
        });
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/login");
};

exports.getSignUp = (req, res, next) => {
  res.render("./auth/signup.ejs", { isLoggedIn: true, isAuthenticated: false });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });
};
