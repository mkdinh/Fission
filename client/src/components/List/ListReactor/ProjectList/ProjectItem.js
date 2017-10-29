import React, { Component } from "react";
import {ListItem} from 'material-ui/List';
import Fa from "react-fontawesome";
import Divider from 'material-ui/Divider';
import { Row, Col } from "../../../Grid";
import API from "../../../../utils/api";

const style = {
    name: {width: "80%"},
    row: {margin: 0},
    edit_icon: {float: "right", fontSize: "1.5rem"}
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

    handleRemove = () => {
        API.project.deleteOne(this.props.project._id)
            .then( project => this.props.updateProjects(this.props.auth0Id))
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
                onClick={() => this.props.updateActiveProject(this.props.project)}
                primaryTogglesNestedList={true}>
                <Row style={style.row}>
                    <Col size={1}>
                        {
                            this.state.edit ?
                                <a href="#" onClick={this.handleRemove}><Fa style={style.edit_icon} name="times"/></a>
                            :
                                ""
                        }
                    </Col>
                    <Col size={10}>
                        {
                            this.state.edit ?
                            <input value={this.state.name} onChange={this.handleProjectInput}/>
                            : 
                            this.props.project.name
                        }
                    </Col>
                    <Col size={1}>
                        {
                            this.state.edit ?
                                <a href="#" onClick={this.handleSubmit}><Fa style={style.edit_icon} name="check"/></a>
                            :
                                <a href="#" onClick={this.handleEdit}><Fa style={style.edit_icon} name="pencil"/></a>
                        }
                    </Col>
                </Row>
            </ListItem>
            <Divider/>
            </div>
        )
    }
}

export default ProjectItem;