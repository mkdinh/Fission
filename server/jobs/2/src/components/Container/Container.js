// Import React dependencies
//--------------------------------------------------------
import React, {Component} from 'react';
import './Container.css'
import { Row } from '../Row';

// Create new stateful component
//--------------------------------------------------------
class Container extends Component{
    
    state = {
        
    }
    
    render(){
        return(
            <div className='container'>

            
            <Row> Add more nesting component here </Row>


            </div>
        )
    }
};


// Export component to application
//--------------------------------------------------------
export {Container};
