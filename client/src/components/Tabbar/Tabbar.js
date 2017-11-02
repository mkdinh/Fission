import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// Get this package from https://github.com/oliviertassinari/react-swipeable-views
//import SwipeableViews from 'react-swipeable-views';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import "./tabbar.css";
import Auth0 from "../Auth/Auth.js";
import actions from "../../utils/actions";

const mapStateToProps = (state) => {
  return {...state.user}
}

class Tabbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      page: ""
    };
  }

  handleChange = (value) => {
    this.props.history.push(value)
    console.log(this.props.history.location.pathname, value)
  };

  handleLogout = () => {
    this.props.dispatch(actions.logout());
    Auth0.logout();
  }

  render() {
    return (
      <div>
      <Router>
        <Tabs
          onChange={this.handleChange}
          value={this.props.history.location.pathname}
        >
          <Tab label="About" value="/about"/>
          <Tab label="Canvas"  value="/canvas"/>
           {!this.props.login ?
            <Tab label="Login" onActive={Auth0.login} value="/login "/>
          :
            
            // <Tab label="Profile" value="/profile"/>
            <Tab label="Logout" onActive={this.handleLogout} value="/about"/>}
        </Tabs>

        </Router>
        
      </div>
    );
  };
};
const connectRedux = connect(mapStateToProps)(Tabbar);

export default withRouter(connectRedux);