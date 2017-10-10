const helper = require('../../helpers/template.helper')
// ${children? children.map(child => `import {${child.name}} from '../components/${child.name}'`).join('\n'): ""  }
module.exports = (children) => 
`// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './App.css';
${helper.importApp(children)}

// Create App component
//--------------------------------------------------------

class App extends Component {
\trender() {

\t\treturn (

${children ? `${helper.initApp(children)}` : ""}\t\t);
\t}
}

export {App};
`