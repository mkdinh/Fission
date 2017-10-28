import React, {Component} from 'react';
import "./BorderChange.css";
class BorderChange extends Component {


    render() {
    
        return (
            
            <div>
                <div id ="borderTitle" style={{
                fontSize: 22,
                fontFamily: "Permanent Marker"
            }}>Component Height</div>
            <input name="height" value={this.props.height} onChange={this.props.handleHeightInput} />
            <div id ="borderWidthTitle" style={{
                fontFamily: "Permanent Marker",
                fontSize: 22
            }}>Component Width</div>
            <input name="width" value={this.props.width} onChange={this.props.handleWidthInput}/>
            </div>
            
        );
    }
}

export default BorderChange;