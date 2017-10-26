// IMPORT DEPENDENCIES
// ---------------------------------------------------
const db = require('../models');

// DEFINING METHODS
// ---------------------------------------------------
module.exports = {

    findOne: (req, res) => {
        db.Component.find(req.params.id)
            .then( component => res.json(component))
            .catch( err => console.log(err))
    },

    findGroups: (req, res) => {
        db.Component.distinct("group")
            .then( groups => {
                let allComponents = {};
                let len = groups.length;

                for(let i = 0; i < len; i++){
                    db.Component.find({group: groups[i]})
                        .then(components => {
                            allComponents[groups[i]] = components
                            i === len-1 ? res.json(allComponents) : "";
                        })
                        .catch( err => console.log(err))
                };
            })
            .catch(err => console.log(err))
    }, 
    findAll: (req, res) => {
        db.Component.find()
            .then(components => res.json(components))
            .catch( err => console.log(err))
    },

    create: (req, res) => {
        db.Component.create(req.body)
            .then( component => res.json(component))
            .catch( err => console.log(err))
    },

    updateOne: (req, res) => {
        db.Component.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            .then( update => res.json(update))
            .catch( err => console.log(err))
    },

    deleteOne: (req, res) => {
        db.Component.findByIdAndRemove(req.params.id)
            .then( () => res.json({success: "Successfully deleted component"}))
            .catch( err => console.log(err))
    }
    
}