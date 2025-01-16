const express = require('express');
const model = require('../models/model');

const addUser = async (req, res) => {
    try {
        const user = await model(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log(error);
    }
} 

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await model.findOne({ email });
        
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found. Please register first."
            });
        }

        // Check if password matches
        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // Success response
        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
}

module.exports = {
    addUser,
    loginUser
}
