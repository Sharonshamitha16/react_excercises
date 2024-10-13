const mongoose = require("mongoose");
const {v4} = require("uuid");

const productSchema = new mongoose.Schema(
    {
        productName:{
            type: String,

        },
        productId:{
            type:String,
            default:v4,
        },
        price:{
            type:Number,
        },
        userId:{
            type:String,
        },
        rateing:{
            type:String,
        },
    }
,{timestamps:true})

const product = mongoose.model("product_backend",productSchema) 

module.exports = product
