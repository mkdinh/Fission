import React, { Component } from 'react';
import "./PaddingCSS.css";
class PaddingCSS extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: "#707070"
        
      }}>
        
        <div id="paddingTitle" style={{
                 fontFamily: "Permanent Marker",
                fontSize: 22
            }}>Component Padding</div>
            <div>Top</div>
            <input name="padding-top" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.paddingTop} onChange={this.props.handleTextInput}/>
            <div>Right</div>
            <input name="padding-right" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.paddingRight} onChange={this.props.handleTextInput}/>
            <div>Bottom</div>
            <input name="padding-bottom" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.paddingBottom} onChange={this.props.handleTextInput}/>
            <div>Left</div>
            <input name="padding-left" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.paddingLeft} onChange={this.props.handleTextInput}/>
      </div>
    )
  }
}

export default PaddingCSS;
