
const helper = require('../../helpers/template.helper')

module.exports = (props) => {

    let {js, css, className, name, children} = props;
    let openTag = `<${js.tag} className='${className}'>`;
    let closeTag = `</${js.tag}>`;
    let singleTag = `<${js.tag}/>`;

    let inherit;
    let value;

    children ? inherit = `{this.props.children}` : inherit = "";
    js.value ? value = js.value : value = "";

    // \t\t\t\t${helper.children(children,'Smart')}
    return(

`// Import React dependencies
//--------------------------------------------------------
import React, {Component} from 'react';
import './${name}.css';
${props.children? helper.import(props.children) : ""}

// Create new stateful component
//--------------------------------------------------------
class ${props.name} extends Component{
    
\tstate = {

\t}

\trender(){
\t\treturn(

\t\t\t${children ? `${openTag}

\t\t\t\t${inherit + value}

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
