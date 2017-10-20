// import depedencies
//--------------------------------------------------------
import React, { Component } from "react";
import { Row, Col } from "../Grid"
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    msg: {fontSize: "2rem"}
}

// create new message modal that render when returning user logged in
//--------------------------------------------------------
class LandingModal extends Component{
    state = {
        open: this.props.open
    }

    handleClose = () => {
        console.log(this.props)
        this.props.toggleModal(this.props.name)
    }

    render(){
        const actions = [
            <RaisedButton
              label="Return"
              primary={true}
              onClick={this.handleClose}
            />,
          ];
        return(
            
            <div>
            <Dialog
              title=""
              actions={actions}
              modal={true}
              open={this.props.open}
            >
                <Row>
                    {this.props.msg}
                </Row>
            </Dialog>
          </div>
        )
    };
};

export { LandingModal };