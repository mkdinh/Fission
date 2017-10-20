import React from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
//import Toggle from 'material-ui/Toggle';
import "./Listcompo.css";
/*Turn the function into a hover event that watches for this click instead of the toggle*/

export default class Listcompo extends React.Component {

  state = {
    open: false,
  };

  onClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleNestedListonClick = (item) => {
    this.setState({
      open: item.state.open,
    });
  };

  render() {
    return (
      <div>
          <br />
        <div id="Listcompo">
          <List className="List">
            <Subheader>Component List Items</Subheader>
            <ListItem primaryText="Cards"  />
            <ListItem primaryText="Grid List"  />
            <ListItem
              primaryText="Button"
              initiallyOpen={true}
              primaryTogglesNestedList={false}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="FlatButton"
                />,
                <ListItem
                  key={2}
                  primaryText="Menus"
                  disabled={false}
                  nestedItems={[
                    <ListItem key={1} primaryText="Appbar"  />,
                  ]}
                />,
                <ListItem
                  key={3}
                  primaryText="Popover"
                  open={this.state.open}
                  onNestedListToggle={this.handleNestedListToggle}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts"/>,
                  ]}
                />,
              ]}
            />
          </List>
        </div>
      </div>
    );
  }
}