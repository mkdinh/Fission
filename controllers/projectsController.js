// IMPORT DEPENDENCIES
// ---------------------------------------------------
const db = require('../models');
const path = require('path');
const deconstruct = require("../utils/compiler.2/deconstructor")
const compile = require("../utils/compiler.2/compiler.js");

// DEFINING METHODS
// ---------------------------------------------------
module.exports = {
    create: () => {

    },
    
    findAll: () => {

    },

    findOne: () => {

    },

    update: () =>{

    },

    delete: () => {

    },

    compile: (req, res) => {

        let data = req.body;
        let jobNum = Math.floor(Math.random() * 100000000) + 1;
        let folder = path.join(__dirname, "../jobs/" + jobNum)

        const deconstructHTML = deconstruct(data, (html) =>{
            // html = html.replace("\\","")
        
            let objHTML = parse(html)
            let package = {
                attribs: {
                    name: "App",
                    expand: "shallow"
                },
                children: objHTML       
            }
        
            compile(package, 'createApp', 5, () => {
                res.download(folder)
            });
        
        });
        
    }
}