// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './Container.css';
import { Row, Col } from '../../Grid';


// Create new stateful component
//--------------------------------------------------------
class Container extends Component{
    
	state = {

	}

	render(){
		return(

			<div>

 				<Row className="row">
					<Col className="col s12">
						<ul className="tabs">
							<li className="tab col s3">
								<a>About</a>
							</li>
 							<li className="tab col s3">
								<a className="active">Build</a>
							</li>
 							<li className="tab col s3">
								<a>The Team</a>
							</li>
 							<li className="tab col s3">
								<a>Feedback</a>
							</li>
						</ul>
					</Col>
 					<div className="col s12">
						<p>Welcome to Fission! This application will generate react component based on old-fashion html markups. Insert any html component you like and it will return a React component file and its css file.</p>
 						<p>On the Build page insert your html markups. Currently you can give compiling configuration inline style as tag properties. These options are supported:</p>
 						<ul>
							<li>name (file name)</li>
 							<li>component (stateful || stateless)</li>
 							<li>group (group component into its own folder)</li>
 							<li>style (any css markup)</li>
 							<li>expand (shallow || deep)</li>
						</ul>
 						<p>Nesting html is supported but this is still a prototype there might be some errors when generating components nesting component</p>
					</div>
 					<div className="col s12">
						<div className="card blue-grey darken-1">
							<div className="card-content white-text">
								<span className="card-title">Card Title</span>
 								<p>I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.</p>
							</div>
 							<div className="card-action">
								<a>This is a link</a>
 								<a>This is a link</a>
							</div>
						</div>
					</div>
 					<div className="col s12">about the team</div>
 					<div className="col s12">
						<div className="row">
							<div className="input-field col s6">
								<input className="validate"></input>
 								<label>First Name</label>
							</div>
 							<div className="input-field col s6">
								<input className="validate"></input>
 								<label>Last Name</label>
							</div>
						</div>
 						<div className="row">
							<div className="input-field col s12">
								<textarea className="materialize-textarea"></textarea>
 								<label>Textarea</label>
							</div>
						</div>
					</div>
				</Row>

			</div>
		)
	}
};


// Export component to application
//--------------------------------------------------------
export { Container };

