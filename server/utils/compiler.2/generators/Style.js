// Import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const path = require('path');

// create new css file
//--------------------------------------------------------
module.exports = (template,Comp,job) => {
    
    // set job directory
    const jobDir = process.cwd() + `/server/jobs/${job}/`;

    // create source dir
    const dir = path.join(jobDir,`src/components/${Comp}/`);

    // create App files
    const file = dir + `${Comp}.css`;
    
    fse.outputFile(file, template)
}