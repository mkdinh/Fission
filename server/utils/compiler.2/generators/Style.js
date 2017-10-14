// Import dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const path = require('path');

// create new css file
//--------------------------------------------------------
module.exports = (template, attribs, num) => {

    let {name, group} = attribs;
    let jobDir;
    let cssDir;
    
    // set job directory
    jobDir = path.join(__dirname,`../../../jobs/${num}/`);

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