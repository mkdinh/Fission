function getChildren(array){
  let children = ""
  array.map(child => {
    const {name, className, js} = child;           
    let openTag = `<${js.tag} className='${className}'>`;
    let closeTag = `</${js.tag}>`

    children += `${openTag} Add more nesting component here ${closeTag}\n`
  })

  return children
}


module.exports = (children) => 
`// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Create App component
//--------------------------------------------------------

class App extends Component {
  render() {
    return (
      <div className="App">
      ${children ?
        `   
        ${getChildren(children)}
      ` : ""}</div>
    );
  }
}

export default App;
`