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
        db.Component.find({default: "true"}).distinct("group")
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
    findCustoms: (req, res) => {
        db.User.findById(req.params.id).populate({path: "components", model:"Component"})
            .then( user => {
                let allComponents = {};
                let len = user.components.length;
                
                user.components.forEach( component => {
                    if(!allComponents[component.group]){
                        allComponents[component.group] = [component]
                    }else{
                        allComponents[component.group].push(component)
                    }
                })
      
                res.json(allComponents)
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
        console.log(req.body)
        newComponent.save((err, doc) => {
            if(err){
                console.log(err)
                res.send(err)
            }else{
                console.log(doc)
                db.User.findByIdAndUpdate(req.body.create_by, {$push: {"components": doc._id}}, {new: true}, (err, newDoc) => {
                    console.log(newDoc)
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