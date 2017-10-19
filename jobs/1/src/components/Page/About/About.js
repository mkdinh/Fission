// Import React dependencies
//--------------------------------------------------------
import React from 'react';
import './About.css';


// Create stateless component
//--------------------------------------------------------
const About = (props) =>

	<div  id="about"className="col s12">

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

// Export component to application
//--------------------------------------------------------
export { About };                                     