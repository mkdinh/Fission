
// Import template helper to create templates
//--------------------------------------------------------
const helper = require('../../helpers/template.helper');


// Export stateless component template
//--------------------------------------------------------
module.exports = function Dumb(props) {
 
    let {html, css, className,classProps, name, children} = props;
    
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
    
    let closeTag = `</${html.tag}>`;
    let singleTag = `<${html.tag}/>`;
    let importPath = "../";
    console.log(openTag)

    let inherit;
    if(children && html.expand){
        inherit = "{this.props.children}\n\n" + helper.children(children);
    }else{
        inherit = "{props.children}"
    };

    // \t\t${'{props.children}' || helper.children(children,'Dumb')}
    return(
`// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './${name}.css';
${children? helper.import(children,false, importPath): ""}

// Create stateless component
//--------------------------------------------------------
const ${name} = (props) =>

${children || html.value ? `\t${openTag}

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
