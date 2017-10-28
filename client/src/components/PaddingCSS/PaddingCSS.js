import React, { Component } from 'react';

class PaddingCSS extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: "#707070"
        
      }}>
        
        <div style={{
                 fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 22
            }}>Padding</div>
            <div>Top</div>
            <input name="paddingTop" value={this.props.paddingTop} onChange={this.props.handlePaddingInputChange}/>
            <div>Right</div>
            <input name="paddingRight" value={this.props.paddingRight} onChange={this.props.handlePaddingInputChange}/>
            <div>Bottom</div>
            <input name="paddingBottom" value={this.props.paddingBottom} onChange={this.props.handlePaddingInputChange}/>
            <div>Left</div>
            <input name="paddingLeft" value={this.props.paddingLeft} onChange={this.props.handlePaddingInputChange}/>
      </div>
    )
  }
}

export default PaddingCSS;
