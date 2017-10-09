
const helper = require('../../helpers/template.helper')

module.exports = (props) =>
`// Import React dependencies
//--------------------------------------------------------
import React, {Component} from 'react';
${props.children? helper.importChildren(props.children) : ""}

// Create new stateful component
//--------------------------------------------------------
class ${props.name} extends Component{

    state = {

    }

    render(){
        ${helper.childrenComp(props.children)}
    }
};


// Export component to application
//--------------------------------------------------------
export default ${props.name};
`
