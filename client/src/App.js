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

//import NavbarBrandNew from "./components/navbar";
import Tabbar from "./components/Tabbar";

//importing page routes
import {About, Canvas, Reactor, Login } from "./pages";

//importing the sidebar menus
import Sidebarmenunew from "./components/Sidebarmenunew";
import Newcompomenu from "./components/Newcompomenu";
// console.log(About)
class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div className="App">
                <Router>
                    <div> 
                        <Tabbar />
                        <Switch>
                            <Route exact path ="/" component={About} />
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/canvas" component={Canvas} />
                            <Route exact path="/reactor" component={Reactor} />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </div>
                </Router>
            </div>
        </MuiThemeProvider>

        );
    }
}

export default App;