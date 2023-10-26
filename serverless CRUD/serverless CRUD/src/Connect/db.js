const mongoose = require("mongoose");

const uri = "mongodb+srv://Kumar001:Kumar2001@training.zn0i3co.mongodb.net/serverless";

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to db successfully");
    }catch(error){
        console.log("DB Connectivity Error: ", error.message);
    }
};

module.exports = connectDB;