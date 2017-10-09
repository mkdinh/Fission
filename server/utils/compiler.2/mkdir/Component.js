// Import Dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const path = require('path');


// Create new component
//--------------------------------------------------------
module.exports = (template,Comp) => {

    // create source dir
    const dir = path.join(__dirname,`src/App/${Comp}/`);

    // create App files
    const file = dir + `${Comp}.js`;
    
    fse.outputFile(file, template)
}