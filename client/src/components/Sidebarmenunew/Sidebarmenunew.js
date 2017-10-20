import React, {
    Component
} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
//import CodeEditor from '../editor';

//set up the Drag and Drop tool
import ReactDOM from 'react-dom';
//import Draggable from 'react-draggable'; // The default
import {
    Draggable,
    Droppable
} from 'react-drag-and-drop';
//THIS WILL NOW BE A LIST COMPONENT

/*<Droppable 
types ={['usercompo']} 
onDrop = {this.onDrop.bind(this)}>
<CodeEditor />

</Droppable>*/
/*this will be th emenu where people can add their commoments-- or should I switch with newcopmomenu*/
class Sidebarmenunew extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });
    onDrop(data) {
        console.log(data)
    }
    render() {
        return (
            <div>
        <RaisedButton
          label="Your Components" fullWidth={true} onClick={this.handleToggle}
        />
        <Drawer width={400} open={this.state.open}>
        <AppBar title="Component Bench" />
          <Draggable type="usercompo" data="buttonHTML"><span><MenuItem>Component 1</MenuItem></span></Draggable>
            <Draggable type="usercompo" data="morefun"><span><MenuItem>Component 2</MenuItem></span></Draggable>
            <Draggable type="usercompo" data="coolbutton"><span><MenuItem>Component 3</MenuItem></span></Draggable>
          <Draggable type ="notcompo" data ="notcool"><span><MenuItem>Component 4</MenuItem></span></Draggable>
        </Drawer>


      </div>

        );
    }
}

export default Sidebarmenunew;