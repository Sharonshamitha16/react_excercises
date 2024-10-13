const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");
const {verifyToken}= require("../middlewares/authToken");

// router.use(verifyToken)

router
.route("/product_backend")
.post(controller.createProduct)
.get(controller.getProduct)
.put(controller.updateId)
.delete(controller.deletId)

router.get("/getproduct/:productId",controller.getOneproduct)
router.get("/getFindbyid/:_id",controller.getFindbyid)

router.put("/updatebyone",controller.updatebyOne)
router.put("/updateall",controller.updatemany)

router.delete("/deletebyone",controller.deletebyOne)
router.delete("/deletemany",controller.Deletemany)

module.exports = router;