import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import { App } from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
, document.getElementById('root'));
=======
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
>>>>>>> 6d4b075c9d766f9ee413972ac6029271e3d8789f
registerServiceWorker();


