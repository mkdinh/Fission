import React, { Component } from 'react';
import {Row, Col, Container} from "../../../../components/Grid";
import "./marginCSS.css";

class MarginCSS extends Component {
  render() {
    return (
      <div>
        <div>
        <Container>
        <div id ="marginTitle" style={{
                fontFamily: "Permanent Marker",
                fontSize: 22
            }}>Component Margin</div>
            

             <Row>
            <Col size={3}>
            <div>Top</div>
            <input name="margin-top" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.marginTop} onChange={this.props.handleTextInput}/>
            </Col>

             
            <Col size={3}>
            <div>Right</div>
            <input name="margin-right" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.marginRight} onChange={this.props.handleTextInput}/>
            </Col>

            <Col size={3}>
            <div>Bottom</div>
            <input name="margin-bottom" placeholder="unassigned"  style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.marginBottom} onChange={this.props.handleTextInput}/>
            </Col>

             
            <Col size={3}>
            <div>Left</div>
            <input name="margin-left" placeholder="unassigned"  style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.marginLeft} onChange={this.props.handleTextInput}/>
            </Col>

                </Row>
            
          </Container>  
          </div>
          </div>
    );
  }
}

export default MarginCSS;
