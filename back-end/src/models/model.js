const mongoose  = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter your name!"]
    },
    contact: {
        type: Number,
        required: [true, "Please Enter your contact!"]
    },
    email: {
        type: String,
        required: [true, "Please Enter your email!"],
        validate: [validator.isEmail, "Please enter a valid email!"]
    },
    password: {
        type: String,
        required: [true, "Please Enter your password!"],
        minlength: 8,
    },
    confirmpwd: {
        type: String,
        required: [true, "Please Verify your password!"],
    }

})

const User = mongoose.model("User", userSchema);

module.exports = User;