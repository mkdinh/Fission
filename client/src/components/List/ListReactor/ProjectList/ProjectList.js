import React, { Component } from "react";
import { List } from 'material-ui/List';
import ProjectItem from "./ProjectItem";
const style = {
    list: {maxHeight: "50vh", overflow: "scroll", padding: "0"}
}

class ProjectList extends Component {
    state = {
        projectSelected: false
    }

    render(){
        return (
            <List className="List" style={style.list}>
            {this.props.projects.map(project => { return (
                <ProjectItem
                    toggleEditProject={this.props.toggleEditProject}
                    key={project._id}
                    auth0Id={this.props.auth0Id}
                    addProject={this.props.addProject}
                    updateProjects={this.props.updateProjects}
                    project={project}
                />
              )}
            )}
            </List>
        )
    }
}

export default ProjectList;