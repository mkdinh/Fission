import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

/*this will be the menu where people can select their components' styling*/
class Newcompomenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });

    render() {
        return (
            <div>
        <RaisedButton
          label="Styling" fullWidth={true}    onClick={this.handleToggle}
        />
        <Drawer width={400} openSecondary={true} open={this.state.open} >
          <AppBar title="Styling Bench" />
        </Drawer>
      </div>
        );
    }
}

export default Newcompomenu;