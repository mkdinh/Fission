import React, {
    Component
} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import CodeEditor from "./components/Editor";
//import FissionButton from "./components/fissionButton";
//import PopoverExampleAnimation from "./components/sidebarmenu";
//import ButtonExample from "./components/compbuttons";


import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//import NavbarBrandNew from "./components/navbar";
import Tabbar from "./components/Tabbar";


//importing page routes
import Canvaspage from "./pages/canvas/Canvaspage.js";
import Aboutpage from "./pages/about/Aboutpage.js";
import Reactorpage from "./pages/reactor/Reactorpage.js";
import Loginpage from "./pages/login/Loginpage.js";

//importing the sidebar menus
import Sidebarmenunew from "./components/Sidebarmenunew";
import Newcompomenu from "./components/Newcompomenu";

class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className="App">
<Tabbar />
      <Router> 
      <Switch>
      <Route exact path ="/" component={Aboutpage} />
      <Route exact path="/about" component={Aboutpage} />
      <Route exact path="/canvas" component={Canvaspage} />
      <Route exact path="/reactor" component={Reactorpage} />
       <Route exact path="/login" component={Loginpage} />
      </Switch>
      </Router>

    
        
       
                  </div>
                  </MuiThemeProvider>

        );
    }
}

export default App;