const mongoose = require("mongoose");

const connection = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected");

    } catch (error) {
        console.log(`Connection Error: ${error.message}`);
    }
};



module.exports = connection;