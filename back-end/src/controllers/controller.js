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

module.exports = {
    addUser
}