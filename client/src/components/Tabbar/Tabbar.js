import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// Get this package from https://github.com/oliviertassinari/react-swipeable-views
//import SwipeableViews from 'react-swipeable-views';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import "./tabbar.css";


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

export default class Tabbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
      <Router>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >

          <Tab label="About" value={0} containerElement={<Link to ="/about"/>} />
          <Tab label="Your Canvas" value={1} containerElement={<Link to ="/canvas"/>} />
           <Tab label="Reactor" value={2} containerElement={<Link to ="/reactor"/>} />
          <Tab label="Login" value={3} containerElement={<Link to ="/login"/>} />
         
        </Tabs>

        </Router>
        
      </div>
    );
  }
}