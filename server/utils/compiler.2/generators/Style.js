// Import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const path = require('path');

// create new css file
//--------------------------------------------------------
module.exports = (package) => {
    
    // const jobDir = process.cwd() + `/server/jobs/${job}/`;
    let {template, name, group, job} = package
    let jobDir;
    let cssDir;
    
    // set job directory
    jobDir = process.cwd() + '/client/'

    // create source dir
    if(group){
        cssDir = path.join(jobDir,`src/components/${group}/${name}/`);
    }else{
        cssDir = path.join(jobDir,`src/components/${name}/`);
    };

    // create App files
    const file = cssDir + `${name}.css`;
    
    fse.outputFile(file, template)
}