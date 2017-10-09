// Import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const path = require('path');


// create new css file
//--------------------------------------------------------
module.exports = (template,Comp) => {

    // create source dir
    const dir = path.join(__dirname,`src/App/${Comp}/`);

    // create App files
    const file = dir + `${Comp}.css`;
    
    fse.outputFile(file, template)
}