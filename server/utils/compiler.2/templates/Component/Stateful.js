
const helper = require('../../helpers/template.helper')

module.exports = (package) => {

    let {type, attribs, children } = package;
    let tag = package.name;
    
    let {classVar, name, style, component, expand, group} = attribs;
    let className = attribs.class;
    
    let importPack, openTag, closeTag, singleTag, inherit, value;
    
    let path = "../";

    if(classVar){
        for(key in classVar){
            let placeholder = "$"+`{${key}}`
            className = className.split(" ");
            className = "{`" + `${className[0]} \${${"package."+key}}` + "`}";
        }
    }
    
    if(attribs && !className){
        openTag = `<${tag} className="${className}">`
    }else if(attribs && classVar){
        openTag = `<${tag} className=${className}>`;
    }else{
        openTag = `<${tag}>`
    }
    

    if(children){
        attribs.expand ? inherit = helper.children(children) : inherit = "\t\t\t\t{this.package.children}\n";
    }else{
        inherit = "";
    };

    closeTag = `</${tag}>`;
    singleTag = `<${tag}/>`;

    
    if(children && attribs.expand){
        inherit = helper.children(children);
    
    }else{
        inherit = "{this.props.children}"
    };

    return(

`// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './${name}.css';
${children? helper.import(package, path) : ""}

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
