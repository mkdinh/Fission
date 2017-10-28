import React, { Component } from 'react';

class MarginCSS extends Component {
  render() {
    return (
      <div>
        
        <div style={{
                 fontFamily: "Roboto",
                fontWeight: "bold",
                fontSize: 22
            }}>Margin</div>
            <div>Top</div>
            <input name="marginTop" value={this.props.marginTop} onChange={this.props.handleMarginInputChange}/>
            <div>Right</div>
            <input name="marginRight" value={this.props.marginRight} onChange={this.props.handleMarginInputChange}/>
            <div>Bottom</div>
            <input name="marginBottom" value={this.props.marginBottom} onChange={this.props.handleMarginInputChange}/>
            <div>Left</div>
            <input name="marginLeft" value={this.props.marginLeft} onChange={this.props.handleMarginInputChange}/>
      </div>
    )
  }
}

export default MarginCSS;
