import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import customBaseTheme from "material-ui/styles/baseThemes/customBaseTheme";
//import NavbarBrandNew from "./components/navbar";
import Tabbar from "./components/Tabbar";

//importing page routes
import {About, Canvas, Login, Profile, Landing} from "./pages";

// console.log(About)
class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(customBaseTheme)}>
            <div className="App" style={{
                backgroundColor: "#707070"
            }} >
                <Router>
                    <div> 
                        <Tabbar />
                        <Switch>
                            <Route exact path ="/" component={Landing} />
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/canvas" component={Canvas} />
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