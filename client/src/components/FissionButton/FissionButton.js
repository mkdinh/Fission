import React, { Component } from 'react';
import "./FissionButton.css";
import RaisedButton from 'material-ui/RaisedButton';

class FissionButton extends Component{

render(){
	return(

<RaisedButton onClick={this.props.handleClick} style={this.props.style} waves='light' label={this.props.label} fullWidth={true}/>

	)}

} 

export default FissionButton;