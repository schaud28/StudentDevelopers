// importing dependencies
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const http = require('http');

// expressjs
const app = express();

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());



// mongodb
mongoose
    .connect(
        `mongodb://mongodb-service/cloudl`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// fireup the server
const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => console.log(`Server up and running on port ${port} !`));