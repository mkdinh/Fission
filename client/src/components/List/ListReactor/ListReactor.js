import React from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import { ListBody } from "./Body";
import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';
import { Card } from 'material-ui/Card';
import Fa from "react-fontawesome";
import Preloader from "../../../components/Preloader";
import "./ListReactor.css";

export default class Listcompo extends React.Component {

  state = {
    open: false,
  };

  render() {
    return (
      <Card id="ListProject" style={{margin: "1rem"}}>
        {/* <CardTitle title="Component List" /> */}
        <Tabs>
          <Tab label="Projects">
            {this.props.projects ?
            <List className="List" style={{maxHeight: "67vh", overflow: "scroll"}}>
            {Object.keys(this.props.components).map(group => { return (
                <div key={group}>
                  <ListItem
                  primaryText={group}
                  primaryTogglesNestedList={true}
                  nestedItems={[<ListBody key={group}
                                    components={this.props.components[group]}
                                    handleClick={this.props.handleClick}
                                    tab={this.props.tab}/>]}
                  />
                  <Divider/>
                </div>
              )}
            )}
            </List>
              :
            <div style={{width: "100%", textAlign: "center", margin: "2rem 0"}}>
              <Preloader/>
            </div>}
          </Tab>

          <Tab label="Components">
            {Object.keys(this.props.customs).length > 0 ?
              <List className="List" style={{maxHeight: "67vh", overflow: "scroll"}}>
              {Object.keys(this.props.customs).map(group => { return (
                  <div key={group}>
                    <ListItem
                    primaryText={group}
                    primaryTogglesNestedList={true}
                    nestedItems={[<ListBody key={group}
                                      components={this.props.customs[group]}
                                      handleClick={this.props.handleClick}
                                      tab={this.props.tab}/>]}
                    />
                    <Divider/>
                  </div>
                )}
              )}
              </List>
                :
              <div style={{width: "100%", textAlign: "center", margin: "2rem 0"}}>
                <Preloader/>
              </div>}
          </Tab>
        </Tabs>

        <div className="list-component-footer" style={{position: "relative", height: "3rem", padding:"1rem"}}>
            <Fa name="plus" style={{position: "relative", fontSize: "1.5rem", float: "right"}}/>
        </div>
      </Card>
       
    );
  }
}