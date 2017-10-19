const fse = require('fs-extra');
const path = require('path');
const IndexJS = require('../templates/Index/index.js'); 
const IndexCSS = require('../templates/Index/style.js');

module.exports = (job) => {
    
    let jobDir;
    let dir;
    
    // set job directory
    jobDir = path.join(__dirname,`../../../jobs/${job}/`);
    
    // create source dir
    dir = path.join(jobDir,'src/');
    
    // create App files
    const html = dir + "index.js";
    const css = dir + "index.css";
    
    fse.outputFile(html, IndexJS());
    fse.outputFile(css, IndexCSS());
}
    