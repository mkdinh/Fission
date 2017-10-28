import React, { Component } from "react";
// import Fa from "react-fontawesome";
import { Card } from 'material-ui/Card';
import { Col } from "../../components/Grid";
import FissionBtn from "../../components/FissionButton";


const style= {
    card: {position: "relative", backgroundColor: "white", padding: 0},
    wrapper: {padding: "1rem"},
    tabs: {margin: "1rem"},
    preview: {backgroundColor: "white",  textAlign: "center"},
    reactorComp: {width: "100%", borderBottom: "1px solid lightgrey"},
    actionBtn: {margin: "0.5rem"},
    previewDiv: {width: "100%"},
    editorCard: {position: "relative", margin: "1rem 0", height: "", backgroundColor: "white"},
    editorWrapper: {position: "relative", overflow: "scroll", height: "40vh", backgroundColor: "black"}
}

class ReactorTab extends Component {
    state = {

    }

    render(){
        return(
            <div>
                <div style={{position: "relative", marginTop: "1rem"}}>
                    <Col size={6} style={{...style.card, width: "49%", height: "50vh", marginRight: "1%", overflow:"scroll"}}>
                        <Card>
                        {
                            this.props.reactor.map(component => 
                            <div 
                            key={component._id} 
                            onMouseOver={() => this.props.handlePreview(component)} 
                            className="reactor-component-list-item">
                            {component.name}
                            </div>)
                        }
                        </Card>
                    </Col>

                    <Col size={6} style={{width: "49%", marginLeft: '1%', padding: 0 }}>
                        <div className="valign-wrapper" style={{...style.card, height: "35vh", width: "100%"}}>
                        {
                            this.props.preview? 
                            <div
                            style={{width: "100%",textAlign: "center"}} 
                            dangerouslySetInnerHTML={this.props.strToDOM(this.props.preview.html)}/> 
                            : ""
                        }
                        </div>

                        <div className="valign-wrapper" style={{...style.card, height: "12.75vh", width: "100%", marginTop: "1rem"}}>

                        {
                            this.props.preview ? 
                            <div style={{margin: "1rem"}}>
                            <p><b>Name:</b> {this.props.preview.name}</p>
                            <p><b>Group:</b> {this.props.preview.group}</p>
                            </div>
                            : ""
                        }
                    
                        </div>
                    </Col>
                </div>
                
                <FissionBtn style={{marginTop: "1rem"}}/>
               
            </div>
        );
    };
};

export default ReactorTab;