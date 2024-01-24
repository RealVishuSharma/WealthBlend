const express = require('express');
const path = require('path');

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