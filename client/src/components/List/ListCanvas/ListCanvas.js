import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { ListBody } from "./Body";
import {Tabs, Tab} from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';
import { Card } from 'material-ui/Card';
import Fa from "react-fontawesome";
import Preloader from "../../../components/Preloader";
import "./ListCanvas.css";

const style = {
  row: {padding: 0}
}

export default class Listcompo extends React.Component {

  state = {
    open: false,
  };

  render() {
    return (
      <Card id="Listcompo" style={{margin: "1rem"}}>
        {/* <CardTitle title="Component List" /> */}
        <Tabs>
          <Tab mode="create" label="Templates" onActive={this.props.updateCanvasMode}>
            {Object.keys(this.props.defaults).length > 0 ?
            <List className="List" style={{maxHeight: "50vh", overflow: "scroll"}}>
            {Object.keys(this.props.defaults).map(group => { return (
                <div key={group}>
                  <ListItem
                  primaryText={group}
                  primaryTogglesNestedList={true}
                  nestedItems={[<ListBody key={group}
                                    default
                                    components={this.props.defaults[group]}
                                    updateActiveHTML={this.props.updateActiveHTML}
                                    addComponent={this.props.addComponent}
                                    tab={this.props.tab}/>]}
                  >
                  </ListItem>
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

          <Tab mode="edit" label="Customs" onActive={this.props.updateCanvasMode}>
          {Object.keys(this.props.customs).length > 0 ?
            <List className="List" style={{maxHeight: "50vh", overflow: "scroll"}}>
        
            {Object.keys(this.props.customs).map(group => { return (
                <div key={group}>
                  <ListItem
                  addSnackbar={this.props.addSnackbar}
                  primaryText={group}
                  primaryTogglesNestedList={true}
                  nestedItems={[<ListBody key={group}
                                    listName={"customs"}
                                    updateActiveCSS={this.props.updateActiveCSS}
                                    updateActiveHTML={this.props.updateActiveHTML}
                                    updateCustoms={this.props.updateCustoms}
                                    addSnackbar={this.props.addSnackbar}
                                    components={this.props.customs[group]}
                                    addComponent={this.props.addComponent}
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