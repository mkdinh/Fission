// IMPORT DEPENDENCIES
// ---------------------------------------------------
const db = require('../models');
const path = require('path');
const deconstruct = require("../utils/compiler.2/deconstructor")
const compile = require("../utils/compiler.2/compiler.js");
const parse = require("html-dom-parser");
const fse = require("fs-extra");
const archiver = require("archiver");
const mime = require("mime");
const request = require("request");

// DEFINING METHODS
// ---------------------------------------------------
module.exports = {
    
    findAll: (req, res) => {
       db.User.findOne({auth0Id: req.params.id}).populate({path: "projects", model: "Project"}).exec()
        .then( db => {
            let sorted = db.projects.sort((a, b) => b.created_timestamp - a.created_timestamp)
            res.json(sorted)
        })
        .catch(err => console.log(err)) 
    },
    
    findOne: (req, res) => {
        db.Project.findById(req.params.id).populate({path: "components", model: "Component"})
        .then(project => res.json(project))
        .catch(err => console.log(err))
    },
    
    create: (req, res) => {
        let newProject = new db.Project(req.body)
        newProject.save()
        .then(project => {
            db.User.findOneAndUpdate({auth0Id: req.params.id}, {$push: {projects: project._id}})
                .then(user => {
                    res.json(project)
                })
        })
    },

    updateOne: (req, res) => {
        db.Project.findOneAndUpdate({_id: req.params.id}, {$set: req.body})
            .then(project => {
                res.json(project)
            })
            .catch(err => console.log(err))
    },

    SaveOne: (req, res) => {
        db.Project.findOneAndUpdate(
                {_id: req.params.id}, 
                {$set:{components: req.body.components, name: req.body.name}}, 
                {new: true})
            .then(project => {
                
                res.json(project)
            })
            .catch(err => console.log(err))
    },

    deleteOne: (req, res) => {
        db.Project.findOneAndRemove({_id: req.params.id})
            .then(project => res.json(project))
            .catch(err => console.log(err))
    },

    download: (req, res) => {
        let file = path.join(__dirname, "../jobs/",req.params.jobNum,"/fission.zip");
        res.download(file)
    },

    compile: (req, res) => {
        let comps = req.body.components;
        let compIds = comps.map(el => el._id);
 
        db.Project.findOneAndUpdate({_id: req.params.id}, {$set: {components: compIds}}, {new: true})
            .then(user => {
                // let jobNum = Math.floor(Math.random() * 100000000) + 1;
                let jobNum = 12;
                let folder = path.join(__dirname, "../jobs/" + jobNum);    
                let port = process.env.PORT || "http://localhost:3001";
                let downloadLink = port + "/api/project/download/" + jobNum

                let exists = fse.existsSync(folder);
                if(!exists){
                    fse.mkdirSync(folder);
                }

                const deconstructHTML = deconstruct(req.body.htmlDOMs, (html) =>{
                    html = html.replace("\\","")
                
                    let objHTML = parse(html)
                    let compiledPackage = {
                        attribs: {
                            name: "App",
                            expand: "shallow"
                        },
                        children: objHTML       
                    }

                    compile(compiledPackage, 'component', jobNum, () => {

                        var output = fse.createWriteStream(folder + "/fission.zip");
                        var archive = archiver('zip');
                        
                        output.on('close', function () {
                            res.json({link: downloadLink});
                            console.log(archive.pointer() + ' total bytes');
                            console.log('archiver has been finalized and the output file descriptor has closed.');
                        });
                        
                        archive.on('error', function(err){
                            throw err;
                        });
                        
                        archive.pipe(output);
                        archive.directory(folder + "/src", "/src")
                        archive.finalize();
                    });
                
                })
            })   
            .catch(err => console.log(err));  
    }
}