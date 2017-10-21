import React from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import { ListBody } from "./Body";
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
//import Toggle from 'material-ui/Toggle';
import { Draggable, Droppable } from 'react-drag-and-drop';
//import group from "../../group.json";
import "./Listcompo.css";
/*Turn the function into a hover event that watches for this click instead of the toggle*/

export default class Listcompo extends React.Component {

  state = {
    components: {},
    open: false,
  };

  componentWillReceiveProps(props){
      this.setState({components: props.components})
  };

  onClick = () => {
    console.log(this.state)
  };

  render() {
    return (
      <div>
          <br />
         
        <div id="Listcompo">
          <a onClick={this.onClick}> Click me </a>
          <p>Button</p>
          <List className="List" style={{height: "50vh", overflow: "scroll"}}>
            <Subheader>Component List Items</Subheader>
            {console.log(this.state.components)}
            {Object.keys(this.state.components).map(group => <ListItem
              key={group}
              primaryText={group}
              primaryTogglesNestedList={false}
              nestedItems={[<ListBody key={group} components={this.state.components[group]}/>]}
              />)}
          </List>
        </div>
       
      </div>
    );
  }
}
{/* <ListItem primaryText="Cards"  />
<ListItem primaryText="Grid List"  /> */}

// nestedItems={[
//   <ListItem
//     key={1}
//     primaryText="FlatButton"
//   />,
//   <ListItem
//     key={2}
//     primaryText="Menus"
//     disabled={false}
//     nestedItems={[
//       <ListItem key={1} primaryText="Appbar"  />,
//     ]}
//   />,
//   <ListItem
//     key={3}
//     primaryText="Popover"
//     open={this.state.open}
//     onNestedListToggle={this.handleNestedListToggle}
//     nestedItems={[
//       <ListItem key={1} primaryText="Drafts"/>,
//     ]}