// IMPORT DEPENDENCIES
// ---------------------------------------------------
const mongoose = require('mongoose');

// CREATE NEW SCHEMA
// ---------------------------------------------------
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String
    },

    created_by: {
        type: String
    },

    components: {
        type: [Schema.Types.ObjectId],
        ref: "Component"
    },

    created_timestamp: {
        type: String,
        default: Date.now
    }
})

// create new model with schema
const Project = mongoose.model('Project',ProjectSchema);

// export model
module.exports = Project;