// import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "../../components/Grid";

const mapStateToProps = (state) => {
    return {...state.user}
}

// create profile page 
//--------------------------------------------------------
class Profile extends Component{
    state = {

    }

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        return(
            <Container fluid>

            <h1>This is their profile page, only render when logged in</h1>
            <h2>Please add more content into here</h2>
            </Container>
        )
    }
};

export default connect(mapStateToProps)(Profile);