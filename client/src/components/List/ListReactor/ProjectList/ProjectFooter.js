import React, { Component } from "react";
import { Col, Row } from "../../../Grid";
import Fa from "react-fontawesome";
import API from "../../../../utils/api";

class ProjectFooter extends Component {
    state = {
        name: "",
        createStage: 0
    }

    addProject = () => {
        this.setState({createStage: 2})
    
        let auth0Id = this.props.profile.auth0Id;
        let project = {
          name: this.state.name,
          created_by: auth0Id
        }
        if(project.name.length > 0){
            API.project.create(project, auth0Id)
              .then(db => {
                this.setState({createStage: 0, name: ""})
                let project = db.data;
                this.props.addSnackbar(`Successfully created project: ${project.name}`, "success")
                this.props.updateProjects(auth0Id)
              })
              .catch(err => console.log(err))
        }else{
            this.setState({createStage: 0, name: ""})
        }
      }

    handleProjectInput = (ev) => {
        let value = ev.target.value;
        this.setState({name: value})
    }

    addProjectIcon = () => {
        switch(this.state.createStage){
            case 0:
                return (
                <a href="#" onClick={() => this.setState({createStage: 1})}>
                    <Fa name="plus" style={{position: "relative", fontSize: "1.5rem"}}/>
                </a>
                )  
                break
            case 1:
                return (
                <a href="#" onClick={this.addProject}>
                    <Fa name="check" style={{position: "relative", fontSize: "1.5rem"}}/>
                </a>)  
                break
            case 2:
                return(
                <a href="#">
                    <Fa name="cog" spin style={{position: "relative", fontSize: "1.5rem"}}/>   
                </a>             
                )
        }
    }

    render(){
        return(
            <div className="list-component-footer" style={{position: "relative", height: "3rem", padding:"1rem"}}>
                <Row>
                    <Col size={10}>
                        {this.state.createStage >= 1 ? <input value={this.state.name} style={{height: "1.5rem"}} className="inline" onChange={this.handleProjectInput}/>: ""}
                    </Col>
                    <Col size={2}>
                        {this.addProjectIcon()}
                    </Col>
                </Row>
            </div>
        )
    }
}

export { ProjectFooter };