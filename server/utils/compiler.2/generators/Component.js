// Import Dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const path = require('path');

// Create new component
//--------------------------------------------------------
module.exports = (template,Comp,job) => {

    const jobDir = process.cwd() + `/server/jobs/${job}/`;
    
    // create source dir
    const dir = path.join(jobDir,`src/components/${Comp}/`);
    
    // create App files
    const file = dir + `${Comp}.js`;
    const index = dir + `index.js`;
    
    fse.outputFile(file, template)
    
    if(fse.existsSync(path)){
        fse.appendFile(index,`\nimport {${Comp}} from './${Comp}'`)    
    }else{
        fse.outputFile(index,`export {${Comp}} from './${Comp}'\n`)
    }
}