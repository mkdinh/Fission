// import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "../../components/Grid";
import auth0 from "../../components/Auth";
import { NewUserModal, LandingModal } from "../../components/Modal";
import { UserProfile } from "../../components/Form";
import API from "../../utils/api";

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
        API.user.findOne("59e926cbc30a38053ab548de")
            .then(user => {
                this.props.dispatch({type: "LOGIN", payload: {profile: user.data}})
                // this.toggleModal("landingModal")
                console.log(this.props)
            })
        // auth0.handleAuthentication(
        //     (user, auth0Id) => {
        //         // if returned with no content
        //         if(user.status === 204){
        //             // dispatch new user for sign up
        //             this.props.dispatch({type: "NEW_USER", playload: {new: true}})
        //             this.setState({auth0Id: auth0Id})
        //             this.toggleModal("newUserModal")
        //         }else{
    
        //             // dispatch login and save user info on global redux
        //             this.props.dispatch({type: "LOGIN", payload: {profile: user.data}})
        //             this.toggleModal("landingModal")
        //             console.log(this.props)
        //         };
        //     }
        // );
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