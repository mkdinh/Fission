const fse = require('fs-extra');
const path = require('path');
const App = require('../templates/App'); 

module.exports = (children,job) => {
    
    const jobDir = process.cwd() + `/server/jobs/${job}/`;
    
    // create source dir
    const dir = path.join(jobDir,'src/App/');

    // create App files
    const js = dir + "App.js";
    const test = dir + "App.test.js";
    const css = dir + "App.css";
    const index = dir + "index.js"
    
    fse.outputFile(js, App.js(children));
    fse.outputFile(test, App.test());
    fse.outputFile(index, `export {App} from './App'`);
    fse.outputFile(css, "/* Empty CSS file */");

}