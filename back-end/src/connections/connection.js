const mongoose = require('mongoose');

const connectDB = async() => {
    mongoose.connect("mongodb://localhost://127.0.0.1:27017/CrudApplication").then(() => {
        console.log("The Database is Connectedd!")
    }).catch((err) => {
        console.log("Unable to connect to Database" + err)
    })
}

module.exports = connectDB;
