// Import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const path = require('path');

// create new css file
//--------------------------------------------------------
module.exports = (template,Comp,job) => {
    
    // set job directory
    // const jobDir = process.cwd() + `/server/jobs/${job}/`;
    const jobDir = process.cwd() + '/client/'
    // create source dir
    const dir = path.join(jobDir,`src/components/${Comp}/`);

    // create App files
    const file = dir + `${Comp}.css`;
    console.log
    fse.outputFile(file, template)
}