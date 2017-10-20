import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// // ./src/index.jsx
// import React, { Component } from 'react';
// import { render } from 'react-dom';
// // Import routing components
// import {Router, Route} from 'react-router';

// class nav extends Component {
//     render(){
//         return (<h1>Home Page</h1>);
//     }
// }


// class contactinfo extends Component {
//     render(){
//         return (<h1>Cars page</h1>);
//     }
// }

// class About extends Component {
//     render(){
//         return (<h1>About page</h1>);
//     }
// }

// render(
//     <Router>
//         <Route path="/" component={Home}/>
//         <Route path="/cars" component={Car}/>
//         <Route path="/about" component={About}/>
//     </Router>,
//     document.getElementById('container')
// );




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


