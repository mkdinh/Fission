import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';


class Menuitem extends Component{

	
	render(){

		return(

			<div>

			 <MenuItem onMouseOver={this.handleToggle}>Style Option</MenuItem>

			</div>

			);
	}

}

export default Menuitem;