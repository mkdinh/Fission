import React, { Component } from 'react';
import {Row, Col, Container} from "../../../../components/Grid";
import "./PaddingCSS.css";
class PaddingCSS extends Component {
  render() {
    return (
      <div>
      <Container>
      <div style={{
        backgroundColor: "#303030"
        
      }}>
        
        <div id="paddingTitle" style={{
                 fontFamily: "Permanent Marker",
                fontSize: 22
            }}>Component Padding</div>
            <Row>
             <Col size={3}>
            <div>Top</div>
            <input name="padding-top" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.paddingTop} onChange={this.props.handleTextInput}/>
             </Col>

             <Col size={3}>
            <div>Right</div>
            <input name="padding-right" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.paddingRight} onChange={this.props.handleTextInput}/>
              </Col>

             <Col size={3}>
            <div>Bottom</div>
            <input name="padding-bottom" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.paddingBottom} onChange={this.props.handleTextInput}/>
             </Col>

             <Col size={3}>
            <div>Left</div>
            <input name="padding-left" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.paddingLeft} onChange={this.props.handleTextInput}/>
              </Col>
          </Row>  
      </div>
      </Container>
      </div>
    )
  }
}

export default PaddingCSS;
