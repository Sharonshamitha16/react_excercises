const mongoose = require("mongoose");
const { v4 } = require("uuid");

const submitSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    name: {
        type: String
    },
    phone: {
        type: Number
    }

},
{timestamps: true});


const submit = mongoose.model("submit", submitSchema);


module.exports = submit;