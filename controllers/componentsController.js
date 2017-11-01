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

    findDefaults: (req, res) => {
        db.Component.find({default: true})
            .then( components => {
                let sorted = { General: [] };

                components.forEach( component => {
                    if(!component.group){
                        sorted.General.push(component)
                    }else{
                        let group = component.group.charAt(0).toUpperCase() + component.group.substring(1);

                        if(!sorted[group]){
                            sorted[group] = [component]
                        }else{
                            sorted[group].push(component)
                        }
                    }
                })
                res.json(sorted)             
            })
            .catch(err => console.log(err))
    }, 
    findCustoms: (req, res) => {
        db.User.findOne({auth0Id: req.params.id}).populate({path: "components", model:"Component"})
            .then( user => {     
                let sorted = { General: [] };
                
                user.components.forEach( component => {
                    if(!component.group){
                        sorted.General.push(component)
                    }else{
                        let group = component.group.charAt(0).toUpperCase() + component.group.substring(1);

                        if(!sorted[group]){
                            sorted[group] = [component]
                        }else{
                            sorted[group].push(component)
                        }
                    }
                })
                res.json(sorted)
            })
            .catch(err => console.log(err))
    }, 

    findAll: (req, res) => {
        db.Component.find()
            .then(components => res.json(components))
            .catch( err => console.log(err))
    },

    create: (req, res) => {
        let newComponent = new db.Component(req.body);

        newComponent.save((err, doc) => {
            if(err){
                console.log(err)
                res.send(err)
            }else{
                db.User.findByIdAndUpdate(req.body.create_by, {$push: {"components": doc._id}}, {new: true}, (err, newDoc) => {
                    res.json(newDoc)
                })
            }
        })
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