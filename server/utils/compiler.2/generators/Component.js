// Import Dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const path = require('path');

// Create new component
//--------------------------------------------------------
module.exports = (template,Comp,job) => {

    // set job directory
    const jobDir = process.cwd() + `/server/jobs/${job}/`;
    
    // create source dir
    const dir = path.join(jobDir,`src/components/${Comp}/`);
    
    // create component files
    const file = dir + `${Comp}.js`;
    const index = dir + `index.js`;
    
    // create file with template if isnt exist
    // prevent multiple overwrites if using the same component as children
    // if(!fse.existsSync(file)){
    //     fse.outputFile(file, template)
    // }else{
    //     console.log(`${Comp}.js already exists!`)
    // }
    
    fse.outputFile(file,template)
    
    // if index file doesnt exist, create index file and write export code
    // else if it does exist, then append to the file
    if(fse.existsSync(index)){
        fse.appendFile(index,`\nexport {${Comp}} from './${Comp}';`)    
    }else{
        fse.outputFile(index,`export {${Comp}} from './${Comp}';\n`)
    }
}