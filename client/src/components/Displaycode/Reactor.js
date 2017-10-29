import React, { Component } from "react";
// import Fa from "react-fontawesome";
import { Card } from 'material-ui/Card';
import { Row, Col } from "../../components/Grid";
import FissionBtn from "../../components/FissionButton";
import API from "../../utils/api";
import Fa from "react-fontawesome";

const style= {
    card: {position: "relative", backgroundColor: "white", padding: 0},
    wrapper: {padding: "1rem"},
    noSpace: {margin: 0, padding: 0},
    tabs: {margin: "1rem"},
    preview: {backgroundColor: "white",  textAlign: "center"},
    reactorComp: {width: "100%", borderBottom: "1px solid lightgrey"},
    actionBtn: {margin: "0.5rem"},
    previewDiv: {width: "100%"},
    editorCard: {position: "relative", margin: "1rem 0", height: "", backgroundColor: "white"},
    editorWrapper: {position: "relative", overflow: "scroll", height: "40vh", backgroundColor: "black"},
    projectName: {fontSize: "2rem", textAlign: "center"},
    deleteIcon: {fontSize: "2rem"}
}

class ReactorTab extends Component {
    state = {
        activeProject: {},
        reactor: {}
    }

    
    componentWillReceiveProps(props){
        this.setState({activeProject: props.activeProject, reactor: props.reactor})
    }

    handleSave = (ev) => {
        ev.preventDefault()
        // let newComp = this.state.reactor.map(component =>{
        //     let exists = this.state.activeProject.components.filter(el => el._id === component._id)
        //     if(exists.length === 0){
        //         return component._id
        //     }
        // });
        // newComp = newComp.filter(el => el !== undefined)
        let newComp = this.state.reactor.map(el => el._id);
        if(newComp){
            API.project.saveOne(newComp, this.state.activeProject._id)
                .then(project => this.props.addSnackbar(`Successfully saved ${project.data.name}`, "success"))
                .catch(err => console.log(err));
        }else{
            
        }
    }

    handleFuse = () => {

    }

    render(){
        return(
            <div>
                <div style={{position: "relative", marginTop: "1rem"}}>
                    <Col size={6} style={{padding: 0}}>
                        <Card style={{...style.card, width: "100%", height: "50vh", marginRight: "1%", overflow:"scroll", padding: "0.5rem 0"}}>
                        <h3 style={style.projectName}>{this.props.activeProject.name}</h3>
                        {
                            this.props.reactor.map(component => 
                            <div 
                            key={component._id} 
                            onMouseOver={() => this.props.addComponent(component,"preview")} 
                            className="reactor-component-list-item">
                                <Row style={style.noSpace}>
                                    <Col size={10}>
                                    {component.name}
                                    </Col>
                                    <Col size={2}>
                                        <a href="#/" data-id={component._id} onClick={this.props.removeFromProject}>
                                            <Fa style={style.deleteIcon} name="times"/>
                                        </a>
                                    </Col>
                                </Row>
                            </div>)
                        }
                        </Card>

                        
                        {
                            this.state.activeProject ?
                                <FissionBtn handleClick={this.handleSave} style={{marginTop: "1rem"}} label="Save It"/>
                            :
                            ""
                        }
                        
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

                        {
                            this.state.activeProject ?
                                <FissionBtn style={{marginTop: "1rem"}} label="Fuse It"/>
                            :
                            ""
                        }
                    </Col>
                </div>
               
            </div>
        );
    };
};

export default ReactorTab;