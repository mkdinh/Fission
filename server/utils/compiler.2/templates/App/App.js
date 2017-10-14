const helper = require('../../helpers/template.helper')

module.exports = (children) => {

    let openTag = `<div>`;
    let closeTag = `</div>`;
    let path = "../components/";
    let inherit;
    let value;
    let importPack;
    
    let components = [];

    children.forEach(child => {

        let propStr = "";

        if(child.classProps){
            for(prop in child.classProps){
                propStr += `${prop}="${child.classProps[prop]}"`
            }
        };
        
        components.push(`\t\t\t\t<${child.name} ${propStr}/>`);
    })
    components = components.join("\n");

    importPack = {children, 
        expand: false,
        path: path
    };

    return(
`// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './App.css';
${helper.import(component, path)}

// Create App component
//--------------------------------------------------------

class App extends Component {
\trender(){
\t\treturn(

\t\t\t${openTag}
${components}
\t\t\t${closeTag}
\t\t)
\t}
};

export { App };
`
    )
};