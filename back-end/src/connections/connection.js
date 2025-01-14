const mongoose = require('mongoose');

const connectDB = async() => {
    mongoose.connect("mongodb+srv://VishuSharma:7sXyIPKYR2ldF2Ba@cluster0.tsow0.mongodb.net/").then(() => {
        console.log("The Database is Connected!")
    }).catch((err) => {
        console.log("Unable to connect to Database" + err)
    })
}

module.exports = connectDB;
