// Import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import Paper from 'material-ui/Paper';
import Fa from "react-fontawesome";
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import "./UserProfile.css";

const style = {
    container: {width: "100%"},
    paper: {margin: "1rem 10rem", padding: "3rem", border: "4px double #ffc107"},
    title: {fontSize: "1.5rem", float: "left", margin: "0 2rem"},
    edit: {fontSize: "1.5rem", float: "right"},
    avatar: {width: "150px", height: "150px", backgroundSize: "150px 150px"},
    name: {margin: "auto"}
}

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
                <Container style={style.container}>
                    <Paper style={style.paper}>
                        <Row className="userTitle">
                            <span style={style.title}>Your Profile</span>
                            {/* <span style={style.edit}>
                                Edit<Fa name="pencil"/>
                            </span> */}
                        </Row>
                    {/*Circle avatar for the user's profile pic*/}
                        <Row style={{height: "25vh"}}>
                            <Col size={2}>
                                <Paper style={{...style.avatar}} 
                                    zDepth={1} 
                                    circle={true}/>
                            </Col>

                      {/*User's first and last name*/}
                            <Col size={10} style={{height: "100%", textAlign: "center"}} className="valign-wrapper">
                                {this.props.profile}
                                <h2 style={style.name}>{`${this.props.profile.firstName ? this.props.profile.firstName: ""} ${this.props.profile.lastName ? this.props.profile.lastName : ""}` }</h2>
                            </Col>
                        {/* </Row>
                        
                    project subheaders and other info for compo list
                            <Col size={6}>
                                <Subheader>Components</Subheader>
                                {console.log(this.props.customs)}
                                <p>{this.props.customs.length}</p>
                                
                            </Col>

                            <Col size={6}>
                                <Subheader>Projects</Subheader>
                                <p>{this.props.projects.length}</p>
                        </Col>*/}
                        </Row>
                    </Paper>
                </Container>
        )
    };

};

export { UserProfile };