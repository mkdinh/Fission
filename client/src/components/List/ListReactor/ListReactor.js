import React from 'react';
import { connect } from "react-redux";
import {List, ListItem} from 'material-ui/List';
import { ListBody } from "./Body";
import {Tabs, Tab} from 'material-ui/Tabs';
import { Card } from 'material-ui/Card';
import Fa from "react-fontawesome";
import Divider from 'material-ui/Divider';
import Preloader from "../../../components/Preloader";
import "./ListReactor.css";
import { Row, Col } from "../../../components/Grid";
import ProjectList, { ProjectFooter } from "./ProjectList";
export default class Listcompo extends React.Component {

  state = {
    project_title: "",
  };


  render() {
    return (
      <Card id="ListProject" style={{margin: "1rem"}}>
        <Tabs>
          <Tab label="Projects">
            {this.props.projects ?
              <ProjectList
                updateActiveProject={this.props.updateActiveProject}
                auth0Id={this.props.profile.auth0Id}
                updateProjects={this.props.updateProjects}
                projects={this.props.projects}/>
            :
            <div style={{width: "100%", textAlign: "center", margin: "2rem 0"}}>
              <p>No Current Project</p>
            </div>}

            <ProjectFooter 
              profile={this.props.profile}
              updateProjects={this.props.updateProjects}
              addSnackbar={this.props.addSnackbar}
              addProject={this.addProject}/>
          </Tab>

          <Tab label="Components">
            {
              Object.keys(this.props.customs).length > 0 ?
                <List className="List" style={{maxHeight: "67vh", overflow: "scroll"}}>
                {Object.keys(this.props.customs).map(group => { return (
                    <div key={group}>
                      <ListItem
                      primaryText={group}
                      primaryTogglesNestedList={true}
                      nestedItems={
                        [<ListBody key={group}
                            components={this.props.customs[group]}
                            addComponent={this.props.addComponent}
                            tab={this.props.tab}/>]
                        }/>
                      <Divider/>
                    </div>
                  )}
                )}
                </List>
              :
              <div style={{width: "100%", textAlign: "center", margin: "2rem 0"}}>
                <Preloader/>
                
              </div>
            }
          </Tab>
        </Tabs>
      </Card>
       
    );
  }
}