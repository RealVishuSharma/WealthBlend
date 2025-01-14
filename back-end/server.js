// External Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require("dotenv").config()

// Internal Dependencies
const User = require("./src/models/model");
const connectDB = require("./src/connections/connection");
const route = require("./src/routes/route");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());
// const corsOptions = { 
//     origin: 'http://localhost:3000', 
//     methods: 'GET,POST', 
//     allowedHeaders: 'Content-Type,Authorization'
//  };
app.use(cors());

app.use("/user", route);

const start = async()=> {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        });
        await connectDB();
    } catch (error) {
        console.error(`Error connecting to server: ${error.message}`);
    }
}

start();