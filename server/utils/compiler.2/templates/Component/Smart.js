
const helper = require('../../helpers/template.helper')

module.exports = (props) => {

    
    let {js, css, className, name, children} = props;
    let openTag = `<${js.tag} className='${className}'>`;
    let closeTag = `</${js.tag}>`
    
    return(

`// Import React dependencies
//--------------------------------------------------------
import React, {Component} from 'react';
import './${name}.css'
${props.children? helper.importChildren(props.children) : ""}
// Create new stateful component
//--------------------------------------------------------
class ${props.name} extends Component{
    
    state = {
        
    }
    
    render(){
        return(
            ${openTag}\n\n${helper.childrenComp(props.children)}\n\n\t\t\t${closeTag}
        )
    }
};


// Export component to application
//--------------------------------------------------------
export {${props.name}};
`
    )
}
