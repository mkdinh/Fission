
// Import template helper to create templates
//--------------------------------------------------------
const helper = require('../../helpers/template.helper');


// Export stateless component template
//--------------------------------------------------------
module.exports = function Stateless(package) {
    
    let {type, attribs, children } = package;
    let tag = package.name;
    
    let {classVar, name, style, component, expand, group} = attribs;
    let className = attribs.class;


    let importPack, openTag, closeTag, singleTag, inherit, attrStr;
    
    let path = "../";

    if(classVar){
        for(key in classVar){
            let placeholder = "$"+`{${key}}`
            className = className.split(" ");
            className = "{`" + `${className[0]} \${${"package."+key}}` + "`}";
        }
    }

    attrStr = "";

    if(attribs){
        for(key in attribs){

            switch(key){
                case "class":
                    attrStr += `className="${attribs[key]}"`
                break

                default:
                    if(key !=="component" && key !== "name" && key !== "expand" && key !== "group" && key !== "style"){
                        attrStr += ` ${key}="${attribs[key]}"`;
                    }
                break
            }
        }
    };

    if(attribs && className && attrStr.length > 0){
        openTag = `<${tag} ${attrStr}>`
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
        inherit = "\t\t{props.children}\n"
    };


    return(
`// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './${name}.css';
${children && expand ? helper.import(package, path): ""}

// Create stateless component
//--------------------------------------------------------
const ${name} = (props) =>

${children || value ? `\t${openTag}

${inherit}
\t${closeTag}` 
: 
`\t${singleTag}`
}

// Export component to application
//--------------------------------------------------------
export { ${name} };                                     `
    )
}
