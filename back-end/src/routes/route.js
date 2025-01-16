const express = require('express');
const router = express.Router();

const Control = require('../controllers/controller');

router.post('/signup', Control.addUser);
router.post('/login', Control.loginUser);

module.exports = router;