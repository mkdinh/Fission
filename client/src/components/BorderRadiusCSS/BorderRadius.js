import React, {Component} from 'react';

class BorderRadius extends Component {

 
    render() {
       
        return (
            
            <div>
            
            <div>Border Radius</div>
            <div>Top Right</div>
            <input name="borderTopRightRadius" value={this.props.borderTopRightRadius} onChange={this.props.handleRadiusInputChange}/>
            <div>Bottom Right</div>
            <input name="borderBottomRightRadius" value={this.props.borderBottomRightRadius} onChange={this.props.handleRadiusInputChange}/>
            <div>Bottom Left</div>
            <input name="borderBottomLeftRadius" value={this.props.borderBottomLeftRadius} onChange={this.props.handleRadiusInputChange}/>
            <div>Top Left</div>
            <input name="borderTopLeftRadius" value={this.props.borderTopLeftRadius} onChange={this.props.handleRadiusInputChange}/>
            </div>
            
        );
    }
}

export default BorderRadius;