
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


    let importPack, openTag, closeTag, singleTag, inherit, value;
    
    let path = "../";

    if(classVar){
        for(key in classVar){
            let placeholder = "$"+`{${key}}`
            className = className.split(" ");
            className = "{`" + `${className[0]} \${${"package."+key}}` + "`}";
        }
    }

    if(attribs && className){
        openTag = `<${tag} className="${className}">`
    }else if(attribs && classVar){
        openTag = `<${tag} className=${className}>`;
    }else{
        openTag = `<${tag}>`
    }
    
    closeTag = `</${tag}>`;
    singleTag = `<${tag}/>`;

    if(children && attribs.expand){
        inherit = helper.children(children);

    }else{
        inherit = "{this.props.children}"
    };

    importPack = {children, attribs, path}

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
