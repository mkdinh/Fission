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
    return {...state}
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
        auth0.handleAuthentication((user, auth0Id) => {
            if(user.status === 204){
                this.props.dispatch({type: "NEW_USER", payload: {new: true}})
                this.setState({newUserModal: true, auth0Id: auth0Id})
                console.log(this.state)
            }else{
                this.props.dispatch({type: "LOGIN", payload: {profile: user.data}})
                this.toggleModal("landingModal")
                localStorage.setItem("auth0Id", user.data.auth0Id)
            }
        })
    };

    toggleModal = (modalName) => {
        this.setState({[modalName]: !this.state[modalName]})
    }

    
    render(){
        return(
            <Container>
                {console.log(this.props.user)}
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
                        msg={`Welcome Back ${this.props.user.profile.profile.firstName} ${this.props.user.profile.profile.lastName}`}
                        toggleModal={this.toggleModal}/>
                    
                :
                    ""}
                
                {
                this.props.login?
                    <UserProfile profile={this.props.user.profile}/>
                :
                    ""
                }
            {console.log(this.props)}
            </Container>
        )
    }
};

export default connect(mapStateToProps)(Profile);