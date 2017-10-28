import React, {Component} from 'react';

class BorderChange extends Component {


    render() {
    
        return (
            
            <div>
                <div style={{
                fontWeight: "bold",
                fontSize: 22,
                fontFamily: "Roboto"
            }}>Height</div>
            <input name="height" value={this.props.height} onChange={this.props.handleHeightInput} />
            <div style={{
                 fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 22
            }}>Width</div>
            <input name="width" value={this.props.width} onChange={this.props.handleWidthInput}/>
            </div>
            
        );
    }
}

export default BorderChange;