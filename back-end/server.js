// External Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require("dotenv").config()

// Internal Dependencies
const User = require("./src/models/model");
const connectDB = require("./src/connections/connection");
const route = require("./src/routes/route");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'front-end/build')));

app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});