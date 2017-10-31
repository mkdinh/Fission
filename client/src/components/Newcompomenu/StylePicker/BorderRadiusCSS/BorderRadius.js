import React, {Component} from 'react';
import "./BorderRadius.css";
class BorderRadius extends Component {

 
    render() {
       
        return (
            
            <div style={{ backgroundColor: "#707070"}} >
            
            <div id="radiusTitle" style={{
               fontFamily: "Permanent Marker",
                fontSize: 22
               
            }}>Component Border Radius</div>
            <div>Top Right</div>
            <input name="borderTopRightRadius" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.borderTopRightRadius} onChange={this.props.handleTextInput}/>
            <div>Bottom Right</div>
            <input name="borderBottomRightRadius" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.borderBottomRightRadius} onChange={this.props.handleTextInput}/>
            <div>Bottom Left</div>
            <input name="borderBottomLeftRadius" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.borderBottomLeftRadius} onChange={this.props.handleTextInput}/>
            <div>Top Left</div>
            <input name="borderTopLeftRadius" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.borderTopLeftRadius} onChange={this.props.handleTextInput}/>
            </div>
            
        );
    }
}

export default BorderRadius;