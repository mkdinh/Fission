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
            <input name="marginTop" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.marginTop} onChange={this.props.handleInputChange}/>
            <div>Right</div>
            <input name="marginRight" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.marginRight} onChange={this.props.handleInputChange}/>
            <div>Bottom</div>
            <input name="marginBottom" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.marginBottom} onChange={this.props.handleInputChange}/>
            <div>Left</div>
            <input name="marginLeft" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.marginLeft} onChange={this.props.handleInputChange}/>
      </div>
    )
  }
}

export default MarginCSS;
