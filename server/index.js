const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//Use body-parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Main Route
app.get('/', (req, res) => {
    res.send(`Hello World`);
});

//PORT
const port = process.env.PORT || 4000;

//Listen port
app.listen(port, () => console.log(`Listening on port ${port}`));