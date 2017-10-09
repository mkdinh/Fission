const fse = require('fs-extra');
const path = require('path');
const App = require('../templates.2/App'); 

module.exports = (children) => {

    // create source dir
    const dir = path.join(__dirname,'src/App/');
    console.log(__dirname)
    // create App files
    const js = dir + "App.js";
    const test = dir + "App.test.js";
    const css = dir + "App.css";
    
    fse.outputFile(js, App.js(children));
    fse.outputFile(test, App.test());
    fse.outputFile(css, "/* Empty CSS file */")
    
}