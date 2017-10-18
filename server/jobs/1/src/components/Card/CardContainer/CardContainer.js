// Import React dependencies
//--------------------------------------------------------
import React, { Component } from 'react';
import './CardContainer.css';
import { Col } from '../../Grid';
import { ContentWrapper } from '../ContentWrapper';
import { CardContent } from '../CardContent';
import { CardTitle } from '../../Text';
import { Paragraph } from '../../Text';
import { CardAction } from '../CardAction';
import { $A } from '../../Text';


// Create new stateful component
//--------------------------------------------------------
class CardContainer extends Component{
    
	state = {

	}

	render(){
		return(

			<div>

 				<Col class="col s12 m6">
					<ContentWrapper class="card blue-grey darken-1">
						<CardContent class="card-content white-text">
							<CardTitle class="card-title">Card Title</CardTitle>
 							<Paragraph >I am a very simple card. I am good at containing small bits of information.</Paragraph>
						</CardContent>
 						<CardAction class="card-action">
							<a href="#">This is a link</a>
 							<a href="#">This is another link</a>
						</CardAction>
					</ContentWrapper>
				</Col>

			</div>
		)
	}
};


// Export component to application
//--------------------------------------------------------
export { CardContainer };

