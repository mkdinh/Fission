// Import Dependencies
//--------------------------------------------------------
const template = require("./templater");
const generate = require("./generators");

// Complier Modules
//--------------------------------------------------------
module.exports = function compile(package, job, num, cb) {

    // if this is a recursive interation, set parent the name of parent object for reference
    var num = num || package.num;
    var completed = completed || [];
    const { children } = package;

    if(package.attribs.name === "App" && job === 'createApp' ){
            // initialize with children
            generate.App(package, num);
            generate.Index(num);   
    }

    children.forEach(child => {
        if(child.attribs && child.attribs.component){
            let tag = child.name;
            let name = child.attribs.name;
            let className = child.attribs.class;
            template(child, num);
        }
     
        if(child.children){
            compile(child, null, num)    
        };
    });

    
    if( cb ){
        cb()
    };
}

     