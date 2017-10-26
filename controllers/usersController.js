// IMPORT DEPENDENCIES
// ---------------------------------------------------
const db = require('../models');

// DEFINING METHODS
// ---------------------------------------------------
module.exports = ({

    // perform login
    login: (req, res) => {
        db.User.findOne({auth0Id: req.params.id})
            .then( user =>{
                if(!user) throw "No user data found";
                res.json(user)
            })
            .catch( err => res.status(204).send({error: err}))
    },

    create: (req, res) => {
        db.User.create(req.body)
            .then( user => {
                res.json(user)
            })
            .catch( err => res.send(err));
    },

    update: (req, res) => {
        db.User.findById(req.params.id, {$set: req.body})
            .then( user => {

            })
            .catch( err => res.send({err: "Unable to change user data"}))
    }
})