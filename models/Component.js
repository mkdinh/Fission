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
        type: Schema.Types.Mixed,
        require: false,
        default: {}
    },
    
    default: {
        type: Boolean,
        default: false
    },

    create_by: {
        type: String
    },

    type: {
        type: String,
        default: "Dumb"
    }
});

// create new model with schema
const Component = mongoose.model('Component', ComponentSchema);

// export model
module.exports = Component;
