import React, { Component } from "react";
import {ListItem} from 'material-ui/List';
import Fa from "react-fontawesome";
import Divider from 'material-ui/Divider';
import { Row, Col } from "../../../Grid";
import API from "../../../../utils/api";

const style = {
    name: {width: "80%"},
    row: {margin: 0, padding: 0},
    edit_icon: {fontSize: "1.4rem"}
}

class ProjectItem extends Component {
    state = {
        edit: false
    }
    
    handleEdit = () => {
        this.setState({
            edit: !this.state.edit, 
            name: this.props.project.name
        })
    }

    handleSubmit = () => {
        API.project.updateOne({name: this.state.name},this.props.project._id)
            .then( project => {
                this.setState({edit: false})
                this.props.updateProjects(this.props.auth0Id)
            })
            .catch(err => console.log(err))
    }

    handleProjectInput = (ev) => {
        let value = ev.target.value;
        this.setState({name: value})
    }

    render(){
        return(
            <div>
            <ListItem
                onClick={() => this.props.addProject(this.props.project)}
                primaryTogglesNestedList={true}>
                <Row style={style.row}>
                        {
                            this.state.edit ?
                                <Col size={2}>
                                    <a href="#" onClick={this.handleRemove}><Fa style={style.edit_icon} name="trash"/></a>
                                </Col>
                            :
                                ""        
                        }

                        {
                            this.state.edit ?
                            <Col size={8}/>
                            : 
                            <Col size={10}>
                                {this.props.project.name}
                            </Col>
                        }
                    <Col size={2}>
                        {
                            this.state.edit ?
                                <div>
                                <a href="#" onClick={this.handleSubmit}><Fa style={style.edit_icon} name="check"/></a>
                                </div>
                            :
                                <a href="#" onClick={this.props.toggleEditProject}><Fa style={style.edit_icon} name="pencil"/></a>
                        }
                    </Col>
                </Row>
                    {
                        this.state.edit ?
                            <Row style={style.row}>
                                <Col size={12}>
                                    <input value={this.state.name} onChange={this.handleProjectInput}/>
                                </Col>
                            </Row>
                        :
                        ""
                    }
            </ListItem>
            <Divider/>
            </div>
        )
    }
}

export default ProjectItem;