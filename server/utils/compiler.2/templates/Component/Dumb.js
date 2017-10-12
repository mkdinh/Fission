
// Import template helper to create templates
//--------------------------------------------------------
const helper = require('../../helpers/template.helper');


// Export stateless component template
//--------------------------------------------------------
module.exports = function Dumb(props) {
    
    let {html, css, className, classProps, group, name, children} = props;
    
    let importPack, openTag, closeTag, singleTag, inherit, value;
    
    importPath = "../";

    if(classProps){
        for(prop in classProps){
            let placeholder = "$"+`{${prop}}`
            className = className.split(" ");
            className = "{`" + `${className[0]} \${${"props."+prop}}` + "`}";
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

    
    if(children && html.expand){
        inherit = "{this.props.children}\n\n" + helper.children(children);
    }else{
        inherit = "{props.children}"
    };

    value = html.value;

    importPack = {
        children, 
        group, 
        expand: html.expand,
        path: importPath
    };

    return(
`// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './${name}.css';
${children? helper.import(importPack): ""}

// Create stateless component
//--------------------------------------------------------
const ${name} = (props) =>

${children || value ? `\t${openTag}

\t\t${inherit}

\t${closeTag}` 
: 
`\t${singleTag}`
}

// Export component to application
//--------------------------------------------------------
export { ${name} };                                     `
    )
}
