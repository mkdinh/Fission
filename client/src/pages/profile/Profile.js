// import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "../../components/Grid";
import { NewUserModal, LandingModal } from "../../components/Modal";
import { UserProfile } from "../../components/Form";
import API from "../../utils/api";
import auth0 from "../../components/Auth"

const mapStateToProps = (state) => {
    return {...state.user}
}

// create profile page 
//--------------------------------------------------------
class Profile extends Component{

    state = {
        auth0Id: "",
        newUserModal: false,
        landingModal: false
    }

    componentDidMount(){
        auth0.handleAuthentication(() => {
            this.props.dispatch({type: "LOGIN", payload: {profile: user.data}})
            this.toggleModal("landingModal")
            localStorage.setItem("auth0Id", user.data.auth0Id)
        })
    };

    toggleModal = (modalName) => {
        this.setState({[modalName]: !this.state[modalName]})
    }

    render(){
        return(
            <Container>
                {/* if user is a new user, display new user modal to fill out information */}
                {this.state.newUserModal ? 
                    <NewUserModal
                        name="newUserModal"
                        open={this.state.newUserModal}
                        auth0Id={this.state.auth0Id}
                        toggleModal={this.toggleModal}/> 
                : 
                    ""}

                {this.state.landingModal ?
                    <LandingModal
                        name="landingModal" 
                        open={true}
                        msg={`Welcome Back ${this.props.profile.firstName} ${this.props.profile.lastName}`}
                        toggleModal={this.toggleModal}/>
                    
                :
                    ""}
                
                {
                this.props.login?
                    <UserProfile profile={this.props.profile}/>
                :
                    ""
                }

            </Container>
        )
    }
};

export default connect(mapStateToProps)(Profile);