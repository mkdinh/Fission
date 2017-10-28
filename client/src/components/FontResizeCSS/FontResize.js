import React, {Component} from 'react';
import "./FontResize.css";
class FontResize extends Component {
       
    render() {
       
        return (
            <div style={{
                backgroundColor: "#707070"
            }}>
            <div id="fontTitle" style={{
                fontFamily: "Permanent Marker",
                fontSize: 22,
            }}>Component Font Resizer</div>
            <input name="fontSize" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.fontSize} onChange={this.props.handleFontSizeInput}/>
            </div>
    );
    }
}


export default FontResize;