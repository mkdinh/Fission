import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// Get this package from https://github.com/oliviertassinari/react-swipeable-views
//import SwipeableViews from 'react-swipeable-views';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import "./tabbar.css";
import Auth0 from "../Auth/Auth.js";

/*these go after the classing router tag and before the /div
<SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
           <div style={styles.slide}>
            Get Started with your Canvas

                      </div>
          <div style={styles.slide}>
           Preview Your Work
          </div>
        </SwipeableViews>

        */
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

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
  };

  render() {
    return (
      <div>
      <Router>
        <Tabs
          onChange={this.handleChange}
          value={this.props.history.location.pathname}
        >

          <Tab label="About" value="/"/>
          <Tab label="Canvas"  value="/canvas"/>
           {!this.props.login ?
            <Tab label="Login" onActive={Auth0.login} value="/login "/>
          :
            <Tab label="Profile" value="/profile"/>}
        </Tabs>

        </Router>
        
      </div>
    );
  };
};
const connectRedux = connect(mapStateToProps)(Tabbar);

export default withRouter(connectRedux);