import React, {Component} from 'react';

class FontRestyle extends Component {
       
    render() {
       
        return (
            <div style={{
                backgroundColor: "#707070"
            }}>
            <div style={{
                 fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 22,
            }}>Font Resizer</div>
            <input name="fontSize" value={this.props.fontSize} onChange={this.props.handleFontSizeInput}/>
            </div>
    );
    }
}


export default FontRestyle;