import React, {Component} from 'react';

class FontResize extends Component {
       
    render() {
       
        return (
            <div style={{
                backgroundColor: "lightGray"
            }}>
            <div style={{
                textDecoration: "underline",
                fontWeight: "bold",
                fontSize: 22,
            }}>Font Resizer</div>
            <input name="fontSize" value={this.props.fontSize} onChange={this.props.handleFontSizeInput}/>
            </div>
    );
    }
}


export default FontResize;