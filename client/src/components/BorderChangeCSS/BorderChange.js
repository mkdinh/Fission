import React, {Component} from 'react';

class BorderChange extends Component {


    render() {
    
        return (
            
            <div>
                <div style={{
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: 22
            }}>Height</div>
            <input name="height" value={this.props.height} onChange={this.props.handleHeightInput} />
            <div style={{
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: 22
            }}>Width</div>
            <input name="width" value={this.props.width} onChange={this.props.handleWidthInput}/>
            </div>
            
        );
    }
}

export default BorderChange;