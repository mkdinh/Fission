const fse = require('fs-extra');
const path = require('path');
const IndexJS = require('../templates/Index/index.js'); 
const IndexCSS = require('../templates/Index/style.js');

module.exports = (job) => {
    
    // set job directory
    const jobDir = process.cwd() + `/server/jobs/${job}/`;
    
    // create source dir
    const dir = path.join(jobDir,'src/');
    
    // create App files
    const html = dir + "index.js";
    const css = dir + "index.css";
    
    fse.outputFile(html, IndexJS());
    fse.outputFile(css, IndexCSS());
}
    