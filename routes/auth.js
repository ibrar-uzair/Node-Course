const express = require("express");
const authController = require("../controllers/auth_controller");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/login", authController.displayLoginPage);

router.post("/login", authController.postLogin);

router.get("/signup", authController.getSignUp);

router.post("/post-signup", authController.postSignup);

router.post("/logout", authController.postLogout);

module.exports = router;
