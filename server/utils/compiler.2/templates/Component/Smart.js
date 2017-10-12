
const helper = require('../../helpers/template.helper')

module.exports = (props) => {

    let {html, css, className, classProps, group, name, children} = props;
    
    let importPack, openTag, closeTag, singleTag, inherit, value;
    
    let importPath = "../";

    let propStr = "";
    if(classProps){
        
        for(prop in classProps){
            
            let placeholder = "$"+`{${prop}}`
            className = className.split(" ");
            className = "{`" + `${className[0]} \${${"this.props."+prop}}` + "`}";
        }
    }
    
    if(className === ""){
        openTag = `<${html.tag} className="">`
    }else if(!classProps){
        openTag = `<${html.tag} className="${className}">`;
    }else{
        openTag = `<${html.tag} className=${className}>`;
    };

    closeTag = `</${html.tag}>`;
    singleTag = `<${html.tag}/>`;
 
    if(children){
        html.expand ? inherit = helper.children(children) : inherit = "\t\t\t\t{this.props.children}\n";
    }else{
        inherit = "";
    };

    html.value ? value = html.value + "\n" : value = "";

    importPack = {
        children,
        group, 
        expand: html.expand, 
        path: importPath
    };

    return(

`// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './${name}.css';
${props.children? helper.import(importPack) : ""}

// Create new stateful component
//--------------------------------------------------------
class ${props.name} extends Component{
    
\tstate = {

\t}

\trender(){
\t\treturn(

\t\t\t${children ? `${openTag}
\t\t\t\t${value}
${inherit}
\t\t\t${closeTag}` 
: `\t\t\t${singleTag}`}
\t\t)
\t}
};


// Export component to application
//--------------------------------------------------------
export {${props.name}};

`
    )
}
