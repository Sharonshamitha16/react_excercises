const express = require("express");
const router = express.Router();
const controller = require("../controllers/register.controller");

router.post("/register", controller.userRegister);
router.post("/login", controller.login);
router.post("/submit", controller.submit);
router.get("/getdata", controller.getSubmit);

module.exports = router;