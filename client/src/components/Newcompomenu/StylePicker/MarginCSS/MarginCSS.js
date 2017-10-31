import React, { Component } from 'react';
import "./marginCSS.css";

class MarginCSS extends Component {
  render() {
    return (
      <div>
        
        <div id ="marginTitle" style={{
                fontFamily: "Permanent Marker",
                fontSize: 22
            }}>Component Margin</div>
            <div>Top</div>
            <input name="margin-top" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.marginTop} onChange={this.props.handleTextInput}/>
            <div>Right</div>
            <input name="margin-right" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.marginRight} onChange={this.props.handleTextInput}/>
            <div>Bottom</div>
            <input name="margin-bottom" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.marginBottom} onChange={this.props.handleTextInput}/>
            <div>Left</div>
            <input name="margin-;eft" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.marginLeft} onChange={this.props.handleTextInput}/>
      </div>
    )
  }
}

export default MarginCSS;
