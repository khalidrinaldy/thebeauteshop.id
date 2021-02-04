const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
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

//API routes
app.use('/api', apiRoutes);

//Connect mongoose
const uri = `mongodb://khalid:sawatari@cluster0-shard-00-00.t4psa.mongodb.net:27017,cluster0-shard-00-01.t4psa.mongodb.net:27017,cluster0-shard-00-02.t4psa.mongodb.net:27017/thebeauteshop?ssl=true&replicaSet=atlas-sj66ae-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error))

//PORT
const port = process.env.PORT || 4000;

//Listen port
app.listen(port, () => console.log(`Listening on port ${port}`));