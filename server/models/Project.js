// IMPORT DEPENDENCIES
// ---------------------------------------------------
const mongoose = require('mongoose');

// CREATE NEW SCHEMA
// ---------------------------------------------------
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String
    }
})

// create new model with schema
const Project = mongoose.model('Project',ProjectSchema);

// export model
module.exports = Project;