const multer = require("multer");

const storage = multer.diskStorage({
    destination:"src/public/profile/",
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({
    storage
})

const Singleupload = upload.single("uploadfile");

module.exports = Singleupload