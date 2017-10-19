// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './Row.css';
import { Col } from '../Col';
import { About } from '../../Page';
import { Build } from '../../Page';
import { Team } from '../../Page';
import { Feedback } from '../../Page';


// Create stateless component
//--------------------------------------------------------
const Row = (props) =>

	<div className="row">

 		<Col className="col s12">
			<ul className="tabs">
				<li className="tab col s3">
					<a href="#about">About</a>
				</li>
 				<li className="tab col s3">
					<a className="active" href="#build">Build</a>
				</li>
 				<li className="tab col s3">
					<a href="#team">The Team</a>
				</li>
 				<li className="tab col s3">
					<a href="#feedback">Feedback</a>
				</li>
			</ul>
		</Col>
 		<div id="about" className="col s12">
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
 		<div id="build" className="col s12">
			<div className="card blue-grey darken-1">
				<div className="card-content white-text">
					<span className="card-title">Card Title</span>
 					<p>I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.</p>
				</div>
 				<div className="card-action">
					<a href="#">This is a link</a>
 					<a href="#">This is a link</a>
				</div>
			</div>
		</div>
 		<div id="team" className="col s12">about the team</div>
 		<div id="feedback" className="col s12">
			<div className="row">
				<div className="input-field col s6">
					<input placeholder="Placeholder" id="first_name" type="text" className="validate"></input>
 					<label for="first_name">First Name</label>
				</div>
 				<div className="input-field col s6">
					<input id="last_name" type="text" className="validate"></input>
 					<label for="last_name">Last Name</label>
				</div>
			</div>
 			<div className="row">
				<div className="input-field col s12">
					<textarea id="textarea1" className="materialize-textarea"></textarea>
 					<label for="textarea1">Textarea</label>
				</div>
			</div>
		</div>

	</div>

// Export component to application
//--------------------------------------------------------
export { Row };                                     