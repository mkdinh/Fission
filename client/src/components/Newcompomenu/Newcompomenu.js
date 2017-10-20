import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';;
//import RaisedButton from 'material-ui/RaisedButton';

/*this will be the menu where people can select their components' styling*/
/*is the mouseover event the right one for this...it seems to be closing */
 class Newcompomenu extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
 
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onMouseOver={this.handleToggle}>Style Option</MenuItem>
          <MenuItem onMouseOver={this.handleToggle}>Style Option</MenuItem>
          <MenuItem onMouseOver={this.handleToggle}>Style Option</MenuItem>
          <MenuItem onMouseOver={this.handleToggle}>Style Option</MenuItem>
          <MenuItem onMouseOver={this.handleToggle}>Style Option</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Newcompomenu;