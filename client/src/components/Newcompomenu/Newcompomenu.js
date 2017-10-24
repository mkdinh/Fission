import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import BorderChange from '../BorderChangeCSS'
import ColorPicker from '../ColorPicker/ColorPicker'
import FontRestyle from '../FontRestyleCSS/FontRestyle'
import BorderRadius from '../BorderRadiusCSS/BorderRadius'
/*this will be the menu where people can select their components' styling*/
class Newcompomenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            color: "#fff"
        };
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });

    render() {
        return (
            <div>

        <RaisedButton
          label="Styling" fullWidth={false}    onClick={this.handleToggle}
        />
        <Drawer width={400} openPrimary={true} open={this.state.open} >
          <AppBar title="Styling Bench" />
          <ColorPicker/>
          <BorderChange/>
          <FontRestyle/>
          <BorderRadius/>
        </Drawer>
      </div>
        );
    }
}

export default Newcompomenu;