// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './App.css';
import {Container} from '../components/Container'

// Create App component
//--------------------------------------------------------

class App extends Component {
  render() {
    return (
      <div className="App">
      
        	<Container> Add more nesting component here </Container>

      </div>
    );
  }
}

export default App;
