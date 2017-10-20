import React from "react";
import Container from "reactstrap/lib/Container";
//import Grid from "reactstrap/lib/Grid";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
//import NavbarBrandNew from "../components/Navbar";
import Sidebarmenunew from "../../components/Sidebarmenunew";
import Newcompomenu from "../../components/Newcompomenu";
import FissionButton from "../../components/FissionButton";
import Previewdisplay from "../../components/Displaycode";


const Canvaspage = () =>
    <div>     
    
    <Container style={{ marginTop: 30 }}>
        <Col size="md-12">
          <p>
 Your canvas page, a space to preview and style your final selected components before creating a "fission" of your work
          </p>
          
           <Row> 
          <Col xs="6">
     
        <Newcompomenu />
          </Col>

        </Row>



 <Row>
<Previewdisplay />

 </Row>    




<FissionButton />
        
    </Col>
    </Container>
  </div>;

export default Canvaspage;