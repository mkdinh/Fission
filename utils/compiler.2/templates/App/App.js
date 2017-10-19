const helper = require('../../helpers/template.helper')

module.exports = (package) => {

    let children = package.children;
    let openTag = `<div>`;
    let closeTag = `</div>`;
    let path = "../components/";
    let inherit;
    let expand;

    let components = [];

    children.forEach(child => {
        
        let attrStr = "";



        if(!child.attribs.name){
            child.attribs.name = helper.getName(child)
        }
        
        components.push(`\t\t\t\t<${child.attribs.name}/>`);
    })

    components = components.join("\n");


    return(
`// Import React dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import "./App.css";
${helper.import(package, path)}

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