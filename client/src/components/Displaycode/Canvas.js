import React, { Component } from "react";
// import Fa from "react-fontawesome";
import { Card } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Col } from "../../components/Grid";
import CodeEditor from "../../components/Editor";


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

class CanvasTab extends Component {
    state = {
        html: ""
    }

    componentWillReceiveProps(props){
        this.setState({html: props.active.html})
    }

    updateDOM = (html) =>  this.setState({html: html})

    render(){
        return(
            <div>
                <div className="valign-wrapper" style={{...style.preview, height: this.props.editor ? "25vh" : "67.3vh"}}>
                    <div className="editor-switch">
                        <FloatingActionButton mini={true} onClick={this.props.toggleEditor} style={style.actionBtn}>
                        <span>Editor</span>
                        </FloatingActionButton>

                        <FloatingActionButton mini={true} onClick={this.props.toggleSidebar} style={style.actionBtn}>
                        <span>Style</span>
                        </FloatingActionButton>       
                    </div>
                    
                    {this.state.html? 
                        <div style={style.previewDiv} dangerouslySetInnerHTML={this.props.strToDOM(this.state.html)}/> 
                    : ""}
                    </div>

                    {this.props.editor ?
                    <Card style={style.editorCard}>
                        <div style={style.editorWrapper}>
                            <CodeEditor
                            updateDOM={this.updateDOM}
                            code={this.state.html}/>

                        </div>

                    </Card>
                    : ""}
                    
                    <Card style={{margin: "1rem 0"}}>
                    <div className="row preview-footer">
                            <Col size={4}>
                                <input id="component_name" value={this.props.active.name} placeholder="Component Name"/>
                            </Col>
                            <Col size={2}>
                                <input value={this.props.active.group} placeholder="Group Name"/>
                            </Col>
                            <Col size={3}>
                                <div style={{margin: "0.5rem 0"}}>
                                <p style={{margin: "0rem", fontSize: "0.75rem"}}>State</p>
                        
                                <div className="switch">
                                    <label>
                                        Dumb
                                            <input type="checkbox"/>
                                            <span className="lever"></span>
                                        Smart
                                    </label>
                                </div>
                                </div>
                            </Col>
                            <Col size={3} className="valign-wrapper" style={{height: "100%"}}>
                                <button className='btn-flat waves-effect waves-light' type='submit' name='action'>Save
                                <i className='material-icons right'>send</i>
                                </button>
                            </Col>  
                    </div>
                    </Card>
            </div>
        );
    };
};

export default CanvasTab;