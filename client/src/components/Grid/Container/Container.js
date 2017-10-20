// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './Container.css';
import { Row, Col } from '../../Grid';


// Create new stateful component
//--------------------------------------------------------
const Container  = (props) => 

	<div className={`container ${props.fluid? `fluid`: ""}`}>
		{props.children}
	</div>


// Export component to application
//--------------------------------------------------------
export { Container };

