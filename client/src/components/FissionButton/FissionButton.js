import React, { Component } from 'react';
import "./FissionButton.css";
import RaisedButton from 'material-ui/RaisedButton';

class FissionButton extends Component{

render(){
	return(

<RaisedButton style={this.props.style} waves='light' label="Fuse It" fullWidth={true}/>

	)}

} 

export default FissionButton;