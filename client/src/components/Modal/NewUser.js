// Import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import API from "../../utils/api";
import { Row, Col } from "../Grid"
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// create new user modal
//--------------------------------------------------------
class NewUserModal extends Component {
    state = {
        firstName: "",
        lastName: "",
        auth0Id: this.props.auth0Id
    }

    handleInput = (ev) => {

        // update state with input
        let {name, value} = ev.target;
        this.setState({[name]: value})
    }

    handleSubmit = (ev) => {
        // handle submit of userInfo on database
        ev.preventDefault();
        console.log(this.state)
        // send userInfo to database to create new user
        API.user.create(this.state)
            // display welcome message
            .then( user => {
              localStorage.setItem("auth0Id", this.props.auth0Id)
              this.props.toggleModal("newUserModal")
            })
            // else display error
            .catch( err => console.log(err) )
    }

    handleOpen = () => {
      this.setState({open: true});
    };


  render() {
    const actions = [
      <RaisedButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Welcome to Fission!"
          actions={actions}
          modal={true}
          open={this.props.open}
        >
            <Row>
              <Col size={6}>
                <TextField 
                  name="firstName" 
                  value={this.state.firstName} 
                  hintText="First Name"
                  onChange={this.handleInput}/>
              </Col>

              <Col size={6}>
                <TextField 
                  name="lastName" 
                  value={this.state.lastName} 
                  hintText="Last Name"
                  onChange={this.handleInput}/>
              </Col>
            </Row>
        </Dialog>
      </div>
      );
    }
};

export { NewUserModal };