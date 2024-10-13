const mongoose = require('mongoose');

const fileuploadedSchema = new mongoose.Schema({
    userId:{
        type:String,
    },
    originalname:{
        type:String,
    },
    filename:{
        type:String,
    },
    destination:{
        type:String,
    },
},{timestamps:true})

const fileUploaded = mongoose.model("file",fileuploadedSchema);

module.exports = fileUploaded;

