const helper = require('../../helpers/template.helper');

module.exports = function Dumb(props) {
 
    let {js, css, className, name, children} = props;
    let openTag = `<${js.tag} className='${className}'>`;
    let closeTag = `</${js.tag}>`

    return(
`// Import React dependencies
//--------------------------------------------------------
import React from 'react';
${children? helper.importChildren(children): ""}

// Create stateless component
//--------------------------------------------------------
const ${name} = (props) =>

${children ?
`   
    ${openTag} 
        ${helper.childrenComp(children)}
    ${closeTag}`
:
`    ${openTag} Add nesting component here ${closeTag}`
}

// Export component to application
//--------------------------------------------------------
export {${name}};
`
    )
}
