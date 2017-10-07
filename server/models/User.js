// IMPORT DEPENDENCIES
// ---------------------------------------------------
const mongoose = require('mongoose');

// CREATE NEW SCHEMA
// ---------------------------------------------------
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String
    },

    password: {
        type: String
    }
});

// create new model with Schema
let User = mongoose.model('User',UserSchema);

// Export the model
module.exports = User;