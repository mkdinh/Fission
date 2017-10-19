// import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const path = require('path');
const App = require('../templates/App'); 

// Script to create default App/ with its children
module.exports = (children, job) => {
    
    // set job directory
    const jobDir = path.join(__dirname,`../../../jobs/${job}/`);
    
    // const jobDir = process.cwd() + '/client/'
    
    // create source dir
    const dir = path.join(jobDir,'src/App/');

    // create App files
    const html = dir + "App.js";
    const test = dir + "App.test.js";
    const css = dir + "App.css";
    const index = dir + "index.js"
    
    // create App.js with its children components
    fse.outputFile(html, App.Component(children));

    // create test files
    fse.outputFile(test, App.Test());

    // create index files
    fse.outputFile(index, `export { App } from './App';`);

    // create css files
    fse.outputFile(css, "/* Empty CSS file */");

}