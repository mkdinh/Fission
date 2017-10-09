module.exports = (props) => {
    `
    import React, {Component} from 'react'

    class ${props.name} extends Component{
        state ={

        }

        render(){
            ${props.children}
        }
    };

    export default ${props.name};
    `
}