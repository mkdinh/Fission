import React from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import { ListBody } from "./Body";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
//import Toggle from 'material-ui/Toggle';
import { Draggable, Droppable } from 'react-drag-and-drop';
import group from "../../group.json";
import "./Listcompo.css";
/*Turn the function into a hover event that watches for this click instead of the toggle
<a onClick={this.onClick}> Click me </a>*/

export default class Listcompo extends React.Component {

  state = {
    open: false,
  };

  render() {
    return (
      <Card id="Listcompo" style={{margin: "1rem"}}>
          <CardTitle title="Component List" />
          <List className="List" style={{height: "auto", overflow: "scroll"}}>
          {Object.keys(this.props.components).map(group => <ListItem
            key={group}
            primaryText={group}
            primaryTogglesNestedList={true}
            nestedItems={[<ListBody key={group}
                              components={this.props.components[group]}
                              handleClick={this.props.handleClick}/>]}
            />)}
        </List>
      </Card>
       
    );
  }
}