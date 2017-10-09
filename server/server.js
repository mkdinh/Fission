// IMPORT DEPENDENCIES
// --------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const template = require('./templates')

// Sample Template
//--------------------------------------------------------
const sample = {
    index: {
        js: {},
        css: {}
    },

    App: {
        js: {},
        test: 'App.test.js',
        css: {},
        children: {}
    }
}


// SETTING UP DATABASE
// --------------------------------------------

// leverage ES6 promise feature
mongoose.Promise = global.Promise;

const LOCAL_URI = "mongodb://localhost/chain-reaction"

// connect to mongoDB
mongoose.connect(
    process.env.MONGO_URI || LOCAL_URI,
    {
        useMongoClient: true
    }
);

// SETTING UP SERVER
// --------------------------------------------

// create instance of express
let app = express();

// assign port to listen to 
let PORT = process.env.PORT || 3001;

// parse body in HTTP request
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// server static files
app.use(express.static("../client/build"));

// use routes
app.use(routes);

// START SERVER
// --------------------------------------------
app.listen(PORT, () => console.log(`listen to port: ${PORT}`));