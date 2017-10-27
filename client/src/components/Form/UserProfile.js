// Import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import Paper from 'material-ui/Paper';
import Fa from "react-fontawesome";
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';

const style = {
    paper: {margin: "1rem 10rem", padding: "3rem"},
    title: {fontSize: "1.5rem", float: "left", margin: "0 2rem"},
    edit: {fontSize: "1.5rem", float: "right"},
    avatar: {width: "150px", height: "150px", backgroundSize: "150px 150px"},
    name: {float: "left"}
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
            <Container>
                <Paper style={style.paper}>
                    <Row>
                        <span style={style.title}>User Profile</span>
                        <span style={style.edit}>
                            Edit<Fa name="pencil"/>
                        </span>
                    </Row>

                    <Row style={{height: "25vh"}}>
                        <Col size={2}>
                            <Paper style={{...style.avatar}} 
                                zDepth={1} 
                                circle={true}/>
                        </Col>

                        <Col size={10} style={{height: "100%"}} className="valign-wrapper">
                            <h2 style={style.name}>{`${this.props.profile.firstName} ${this.props.profile.lastName}` }</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={6}>
                            <Paper>
                                <Subheader>Projects</Subheader>
                                <List>
                            
                                    <ListItem
                                    primaryText="Your Own Component 1"
                                    secondaryText=""
                                    secondaryTextLines={2}
                                    />
                                    <Divider/>
                                    <ListItem
                                    /* {primaryText="Your Own Component 2"} */
                                    secondaryText=""
                                    secondaryTextLines={2}
                                    />

                                </List>
                            </Paper>
                        </Col>

                        <Col size={6}>
                            <Paper>
                                    <Subheader>Projects</Subheader>
                                <List>
                             
                                    <ListItem
                                    primaryText="Project 1"
                                    secondaryText=""
                                    secondaryTextLines={2}
                                    />
                                    <Divider/>
                                    <ListItem
                                    primaryText="Project 2"
                                    secondaryText=""
                                    secondaryTextLines={2}
                                    />
                    
                    
                                </List>
                            </Paper>
                        </Col>
                    </Row>
                </Paper>
            </Container>
        )
    };

};

export { UserProfile };