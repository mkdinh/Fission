
const helper = require('../../helpers/template.helper')

module.exports = (package) => {

    let {type, attribs, children } = package;
    let tag = package.name;
    
    let {classVar, name, style, component, expand, group} = attribs;
    let className = attribs.class;
    
    !name ? name = helper.getName(package) : name;
    
    let importPack, openTag, closeTag, singleTag, inherit, attrStr;
    
    let path = "../";

    if(classVar){
        for(key in classVar){
            let placeholder = "$"+`{${key}}`
            className = className.split(" ");
            className = "{`" + `${className[0]} \${${"package."+key}}` + "`}";
        }
    }

    attrStr= "";

    if(attribs){
        for(key in attribs){

            switch(key){
                case "class":
                    attrStr += `className="${attribs[key]}" `
                break

                default:
                    if(key !=="component" && key !== "name" && key !== "expand" && key !== "group" && key !== "style"){
                        attrStr += `${key}="${attribs[key]}" `
                    }
                break
            }
        }
    };
    
    if(attribs && !className && attrStr.length > 0){
        openTag = `<${tag}${attrStr}>`
        console.log(openTag)
    }else if(attribs && classVar){
        openTag = `<${tag} className=${className}>`;
    }else{
        openTag = `<${tag}>`
    }
    
    closeTag = `</${tag}>`;
    singleTag = `<${tag}/>`;

    
    if(children && attribs.expand){
        inherit = helper.children(package);
    
    }else{
        inherit = "\t\t\t\t{this.props.children}\n"
    };

    return(

`// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './${name}.css';
${children && expand? helper.import(package, path) : ""}

// Create new stateful component
//--------------------------------------------------------
class ${name} extends Component{
    
\tstate = {

\t}

\trender(){
\t\treturn(

\t\t\t${children ? `${openTag}

${inherit}
\t\t\t${closeTag}` 
: `\t\t\t${singleTag}`}
\t\t)
\t}
};


// Export component to application
//--------------------------------------------------------
export { ${name} };

`
    )
}
