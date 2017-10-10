// import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const path = require('path');
const App = require('../templates/App'); 


// Script to create default App/ with its children
module.exports = (children,job) => {
    
    // set job directory
    const jobDir = process.cwd() + `/server/jobs/${job}/`;
    
    // create source dir
    const dir = path.join(jobDir,'src/App/');

    // create App files
    const js = dir + "App.js";
    const test = dir + "App.test.js";
    const css = dir + "App.css";
    const index = dir + "index.js"
    
    // create App.js with its children components
    fse.outputFile(js, App.js(children));

    // create test files
    fse.outputFile(test, App.test());

    // create index files
    fse.outputFile(index, `export {App} from './App'`);

    // create css files
    fse.outputFile(css, "/* Empty CSS file */");

}