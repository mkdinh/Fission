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
            <input name="paddingTop" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.paddingTop} onChange={this.props.handlePaddingInputChange}/>
            <div>Right</div>
            <input name="paddingRight" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.paddingRight} onChange={this.props.handlePaddingInputChange}/>
            <div>Bottom</div>
            <input name="paddingBottom" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.paddingBottom} onChange={this.props.handlePaddingInputChange}/>
            <div>Left</div>
            <input name="paddingLeft" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.paddingLeft} onChange={this.props.handlePaddingInputChange}/>
      </div>
    )
  }
}

export default PaddingCSS;
