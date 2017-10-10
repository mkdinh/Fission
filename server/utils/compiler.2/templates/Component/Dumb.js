
// Import template helper to create templates
//--------------------------------------------------------
const helper = require('../../helpers/template.helper');


// Export stateless component template
//--------------------------------------------------------
module.exports = function Dumb(props) {
 
    let {js, css, className, name, children} = props;
    let openTag = `<${js.tag} className='${className}'>`;
    let closeTag = `</${js.tag}>`;
    let singleTag = `<${js.tag}/>`;

    let inherit;
    let value;

    children ? inherit = `{props.children}` : inherit = "";
    js.value ? value = js.value : value = "";

    // \t\t${'{props.children}' || helper.children(children,'Dumb')}
    return(
`// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './${name}.css';
${children? helper.import(children): ""}

// Create stateless component
//--------------------------------------------------------
const ${name} = (props) =>

${children || js.value ? `\t${openTag}

\t\t${inherit + value}

\t${closeTag}` 
: 
`\t${singleTag}`
}

// Export component to application
//--------------------------------------------------------
export { ${name} };
`
    )
}
