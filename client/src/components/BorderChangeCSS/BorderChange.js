import React, {Component} from 'react';

class BorderChange extends Component {


    render() {
    
        return (
            
            <div>
            <input name="height" value={this.props.height} onChange={this.props.handleHeightInput} />
            <input name="width" value={this.props.width} onChange={this.props.handleWidthInput}/>
            </div>
            
        );
    }
}

export default BorderChange;