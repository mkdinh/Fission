import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import CodeEditor from "./components/Editor";
//import FissionButton from "./components/fissionButton";
//import PopoverExampleAnimation from "./components/sidebarmenu";
//import ButtonExample from "./components/compbuttons";

import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
// import customBaseTheme from "material-ui/styles/baseThemes/customBaseTheme";
//import NavbarBrandNew from "./components/navbar";
import Tabbar from "./components/Tabbar";

//importing page routes
import {About, Canvas, Reactor, Login, Profile } from "./pages";

//importing the sidebar menus
import Sidebarmenunew from "./components/Sidebarmenunew";
import Newcompomenu from "./components/Newcompomenu";
// console.log(About)
class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div className="App"  style={{
        backgroundColor: '#747472'
      }}>
                <Router>
                    <div> 
                        <Tabbar />
                        <Switch>
                            <Route exact path ="/" component={About} />
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/canvas" component={Canvas} />
                            <Route exact path="/reactor" component={Reactor} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/profile" component={Profile} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </MuiThemeProvider>

        );
    }
}

export default App;