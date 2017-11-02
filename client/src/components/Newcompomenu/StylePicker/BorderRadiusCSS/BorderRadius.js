import React, {Component} from 'react';
import {Row, Col, Container} from "../../../../components/Grid";
import "./BorderRadius.css";
class BorderRadius extends Component {

 
    render() {
       
        return (
            <div>
            <Container>
            <div style={{ backgroundColor: "#303030"}} >
            
            <div id="radiusTitle" style={{
               fontFamily: "Permanent Marker",
                fontSize: 22
               
            }}>Component Border Radius</div>

            <Row>
            <Col size={3}>
            <div>Top Right</div>
            <input name="border-top-right-radius" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.borderTopRightRadius} onChange={this.props.handleTextInput}/>
            </Col>

            <Col size={3}>
            <div>Bottom Right</div>
            <input name="border-bottom-right-radius" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.borderBottomRightRadius} onChange={this.props.handleTextInput}/>
            </Col>

            <Col size={3}>
            <div>Bottom Left</div>
            <input name="border-bottom-left-radius" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.borderBottomLeftRadius} onChange={this.props.handleTextInput}/>
            </Col>

            <Col size={3}>
            <div>Top Left</div>
            <input name="border-top-left-radius" placeholder="unassigned" style ={{color: "#ffc107", fontSize: "20px", textAlign: "center", border: "none"}} value={this.props.borderTopLeftRadius} onChange={this.props.handleTextInput}/>
            </Col>

            </Row>
            </div>
          </Container>  
          </div>
        );
    }
}

export default BorderRadius;