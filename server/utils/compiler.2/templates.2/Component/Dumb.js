module.exports = function Dumb(props) {
 
    let {js, css, className, name, children} = props;
    let openTag = `<${js.tag} className='${className}'>`;
    let closeTag = `</${js.tag}>`

    return(
`// Import React dependencies
//--------------------------------------------------------
import React from 'react';


// Export component to application
//--------------------------------------------------------
export default (props) =>

${children ?
`   
    ${openTag} 

        ${children.filter(child => child.name !== name).map(child => {

            const {name, className, js} = child;           
            let openTag = `<${js.tag} className='${className}'>`;
            let closeTag = `</${js.tag}>`
    
            return (`${openTag} Add nesting component here ${closeTag}\n`)
        })}
    ${closeTag}`
:
`    ${openTag} Add nesting component here ${closeTag}`
}
`
    )
}
