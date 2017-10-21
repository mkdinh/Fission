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
    group: {
        type: String,
        require: true
    },
    
    html: {
        type: String,
        require: true
    },
    
    css: {
        type: String,
        require: true
    },
    
    default: {
        type: Boolean,
        default: false
    },

    createBy: {
        type: String
    }
});

// create new model with schema
const Component = mongoose.model('Component', ComponentSchema);

// export model
module.exports = Component;
