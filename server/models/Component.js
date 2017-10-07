// IMPORT DEPENDENCIES
// ---------------------------------------------------
const mongoose = require('mongoose');

// CREATE NEW SCHEMA
// ---------------------------------------------------
const Schema = mongoose.Schema;

const ComponentSchema = new Schema({
    name: {
        type: String
    }
});

// create new model with schema
const Component = mongoose.model('Component',Component);

// export model
module.exports = Component;
