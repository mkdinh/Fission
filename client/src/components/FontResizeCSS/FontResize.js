import React, {Component} from 'react';

class FontResize extends Component {
       
    render() {
       
        return (
            <div style={{
                backgroundColor: "#707070"
            }}>
            <div style={{
                fontFamily: "Permanent Marker",
                fontSize: 22,
            }}>Component Font Resizer</div>
            <input name="fontSize" value={this.props.fontSize} onChange={this.props.handleFontSizeInput}/>
            </div>
    );
    }
}


export default FontResize;