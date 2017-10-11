// Import Dependencies
//--------------------------------------------------------
const fse = require('fs-extra');
const path = require('path');

// Create new component
//--------------------------------------------------------
module.exports = (template,Comp,job) => {

    // set job directory
    // const jobDir = process.cwd() + `/server/jobs/${job}/`;
    let jobDir;
    compDir = path.join(jobDir,`src/components/${Comp}/`);

    jobDir = process.cwd() + '/client/';

    if(group){
        compDir = path.join(jobDir,`src/components/${group}/${Comp}/`);
    }else{
        compDir = path.join(jobDir,`src/components/${Comp}/`);
    };

    // create source dir
    
    // create component files
    let file = compDir + `${Comp}.js`;
    let index = compDir + `index.js`;
    
    // create file with template if isnt exist
    // prevent multiple overwrites if using the same component as children
    
    fse.outputFile(file,template)
    
    // if index file doesnt exist, create index file and write export code
    // else if it does exist, then append to the file
    if(fse.existsSync(index)){
        
        fse.readFile(index,'utf8', (err, text) => {
            let lines = text.split("\n");
            let exist = false;

            for(i = 0; i < lines.length; i++ ){
                if( lines[i] === `export {${Comp}} from './${Comp}`){
                    exist = true; 
                }   
            }

            exist ? fse.appendFile(index,`\nexport {${Comp}} from './${Comp}';`) : "";

        });

    }else{
        fse.outputFile(index,`export {${Comp}} from './${Comp}';\n`)
    }
}