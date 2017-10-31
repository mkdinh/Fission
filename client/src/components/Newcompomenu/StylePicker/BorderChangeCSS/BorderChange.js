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
            <input name="height" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.height} onChange={this.props.handleTextInput} />
            <div id ="borderWidthTitle" style={{
                fontFamily: "Permanent Marker",
                fontSize: 22
            }}>Component Width</div>
            <input name="width" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.width} onChange={this.props.handleTextInput}/>
            </div>
            
        );
    }
}

export default BorderChange;