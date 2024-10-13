const express = require("express");
const router = express.Router();
const Singleupload = require("../middlewares/multer");
const controller = require("../controllers/file.controller");
const {verifyToken} =require("../middlewares/authToken");




router.use(verifyToken);

router
.route("/file")
.post(Singleupload,controller.createfile)
.get(controller.getfile)
.put(Singleupload,controller.editFile)
.delete(controller.deleteFile)

router.get("/getfile",controller.getfileId)

module.exports = router;

