module.exports = (props) => {
    `
    import React, { Component } from 'react';
    import logo from './logo.svg';
    import './App.css';
    
    class App extends Component {
      render() {
        return (
          <div className="App">
            ${props.children}
          </div>
        );
      }
    }
    
    export default App;
    `
}