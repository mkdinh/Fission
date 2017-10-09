const helper = require('../../helpers/template.helper')

module.exports = (children) => 
`// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './App.css';
${children? children.map(child => `import {${child.name}} from '../components/${child.name}'`).join('\n'): ""  }

// Create App component
//--------------------------------------------------------

class App extends Component {
  render() {
    return (
      <div className="App">
      ${children ? `${helper.childrenComp(children)}` : ""}
      </div>
    );
  }
}

export default App;
`