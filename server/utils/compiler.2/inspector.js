// Import dependencies
//--------------------------------------------------------
const helper = require("./helpers/inspector.helper.js");
const fse = require('fs-extra');

// Export inspector function
//--------------------------------------------------------
module.exports = function inspector(children){
    
    // // object with unique component as keys and the group it belongs to as values
    // let uniqueGroup = helper.groupExport(children);  
    // // for each component, write exports state to appropriate group directory
    // for(component in uniqueGroup){
    //     let dir;
    //     // set group directory if there is one

    //     indexJS = process.cwd() + `/client/src/components/${uniqueGroup[component]}/index.js`;
    
    //     fse.appendFile(indexJS,`\nexport { ${component} } from "./${component}";`)
    //     .then(() => "")
    //     .catch((err) => console.log(err))

    // };

};