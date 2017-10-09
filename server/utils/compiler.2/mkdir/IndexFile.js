const fse = require('fs-extra');
const path = require('path');
const IndexJS = require('../templates.2/Index/index.js'); 
const IndexCSS = require('../templates.2/Index/style.js');

module.exports = () => {

    // create source dir
    const dir = path.join(__dirname,'src/');
    
    // create App files
    const js = dir + "index.js";
    const css = dir + "index.css";
    
    fse.outputFile(js, IndexJS());
    fse.outputFile(css, IndexCSS());
}
    