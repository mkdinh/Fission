// IMPORT DEPENDENCIES
// ---------------------------------------------------
const mongoose = require('mongoose');

// CREATE NEW SCHEMA
// ---------------------------------------------------
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },

    components: {
        type: Schema.Types.ObjectId,
        ref: "Component"
    }
});

// create new model with Schema
let User = mongoose.model('User',UserSchema);

// Export the model
module.exports = User;