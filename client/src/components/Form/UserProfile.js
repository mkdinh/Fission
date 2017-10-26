// Import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";

// Create profile with the options to edit them
//--------------------------------------------------------
class UserProfile extends Component{
    state = {
        editMode: false
    }

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <Row>   
                
            </Row>
        )
    };

};

export { UserProfile };