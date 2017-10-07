// IMPORT DEPENDENCIES
// ---------------------------------------------------
const mongoose = require('mongoose');

// CREATE NEW SCHEMA
// ---------------------------------------------------
const Schema = mongoose.Schema;

const ComponentSchema = new Schema({
    name: {
        type: String
    },

    default: {
        type: Boolean,
        default: false
    }

});

// create new model with schema
const Component = mongoose.model('Component', ComponentSchema);

// export model
module.exports = Component;
