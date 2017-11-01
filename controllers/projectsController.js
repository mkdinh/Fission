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
        let jobNum = 11;
        let file = path.join(__dirname, "../jobs/11/text.html");
        // res.set('Content-disposition', 'attachment; filename='+ filename);
        // res.set('Content-type', "text/html");
        res.download(file)
        // let filestream = fse.createReadStream(file);
        // filestream.pipe(res)
        // request("http://localhost:3003/api/project/download/project").pipe(res)
        // res.sendFile(file)
        console.log(file)
        // res.download(folder + "/text.);
        // console.log(folder+"/text.html");
    },

    compile: (req, res) => {
        let comps = req.body.components;
        let compIds = comps.map(el => el._id);
 
        db.Project.findOneAndUpdate({_id: req.params.id}, {$set: {components: compIds}}, {new: true})
            .then(user => {
                // let jobNum = Math.floor(Math.random() * 100000000) + 1;
                let jobNum = 11;
                let folder = path.join(__dirname, "../jobs/" + jobNum);
                
                // fse.mkdirSync(folder);
                
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
                    res.send(folder)
                    // compile(compiledPackage, 'component', jobNum, () => {

                    //     // create a file to stream archive data to.
                    //     var output = fse.createWriteStream(folder + '/example.zip');
                    //     var archive = archiver('zip', {
                    //     zlib: { level: 9 } // Sets the compression level.
                    //     });

                    //     // listen for all archive data to be written
                    //     // 'close' event is fired only when a file descriptor is involved
                    //     output.on('close', function() {
                    //         console.log(archive.pointer() + ' total bytes');
                    //         console.log('archiver has been finalized and the output file descriptor has closed.');
                    //     });

                    //     // This event is fired when the data source is drained no matter what was the data source.
                    //     // It is not part of this library but rather from the NodeJS Stream API.
                    //     // @see: https://nodejs.org/api/stream.html#stream_event_end
                    //     output.on('end', function() {
                    //         console.log('Data has been drained');
                    //     });

                    //     // good practice to catch warnings (ie stat failures and other non-blocking errors)
                    //     archive.on('warning', function(err) {
                    //         if (err.code === 'ENOENT') {
                    //         // log warning
                    //         } else {
                    //         // throw error
                    //         throw err;
                    //         }
                    //     });

                    //     // good practice to catch this error explicitly
                    //     archive.on('error', function(err) {
                    //     throw err;
                    //     });

                    //     // pipe archive data to the file
                    //     archive.pipe(output);
                    //     archive.directory(folder,"newdir")

                    //     res.send(folder)
    
                    // });
                
                });
            })   
            .catch(err => console.log(err))   
    }
}