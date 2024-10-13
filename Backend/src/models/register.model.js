const mongoose = require("mongoose");
const { v4 } = require("uuid");

const registerSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    userName: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    mobileNo: {
        type: Number
    },
    password: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        default: v4
    }
},
{timestamps: true});


const register = mongoose.model("register", registerSchema);


module.exports = register;