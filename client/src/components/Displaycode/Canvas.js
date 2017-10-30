import React, { Component } from "react";
// import Fa from "react-fontawesome";
import { Card } from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { Col } from "../../components/Grid";
import CodeEditor from "../../components/Editor";
import API from "../../utils/api";

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
        html: "",
        css: "",
        group: "",
        name: "",
        type: "Dumb",
        create_by: this.props.profile._id
    }

    componentWillReceiveProps(props){
        this.setState({
            html: props.active.html,
            css: props.active.css,
            group: props.active.group,
            name: props.active.name,
            type: props.active.type,
            default: false, 
            create_by: props.profile._id})
    }

    updateDOM = (html) =>  this.setState({html: html})
    
    toggleType = () => this.state.type === "Dumb" ?
        this.setState({type: "Smart"}) : this.setState({type: "Dumb"})

    handleChange = (ev) => {
        let { value, name } = ev.target;
        this.setState({[name]: value});
    }

    handleSumbit = (ev) => {
        ev.preventDefault();
        let group, exists;

        let context = ev.target.name;
        let auth0Id = this.props.profile.auth0Id;

        switch(context){
            case "create":
                if(!this.state.html){
                    this.props.addSnackbar("There is no markups for this component", "error")
                    return
                }
                
                if(!this.state.name){
                    this.props.addSnackbar("The component's name is missing", "error")
                    return
                }
                
                group = this.state.group.charAt(0).toUpperCase() + this.state.group.substring(1);

                if(this.state.group !== "" && this.props.customs[group]){
                    exists = this.props.customs[group].filter(el => el.name === this.state.name)
                }else{
                    exists = this.props.customs["General"].filter(el => el.name === this.state.name)
                }

                if(exists.length > 0){
                    this.props.addSnackbar("Another component already has this name!", "error")
                    return
                }
        
                API.component.create(this.state)
                    .then((doc) => {
                        let name = this.state.name
                        this.props.updateCustoms(auth0Id, doc);
                        this.props.addSnackbar(`Successfully created ${name}`, "success")
                    })
                    .catch((err) => console.log(err))
                break
            case "edit":
                let componentId = this.props.active._id;
                API.component.updateOne(this.state, componentId)
                    .then((doc) => {
                        this.props.updateCustoms(auth0Id, doc.data);
                        this.props.addSnackbar(`Successfully updated ${this.state.name}`, "success")
                    })
                    .catch((err) => console.log(err))
        }
    }

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
                                <input id="component_name" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Component Name"/>
                            </Col>
                            <Col size={2}>
                                <input name="group" value={this.state.group} onChange={this.handleChange} placeholder="Group Name"/>
                            </Col>
                            <Col size={3}>
                                <div style={{margin: "0.5rem 0"}}>
                                <p style={{margin: "0rem", fontSize: "0.75rem"}}>State</p>
                        
                                <div className="switch">
                                    <label>
                                        Dumb
                                            <input type="checkbox" 
                                                onClick={this.toggleType} 
                                                checked= {this.state.type ==="Smart"? "checked": ""}/>
                                            <span className="lever"></span>
                                        Smart
                                    </label>
                                </div>
                                </div>
                            </Col>
                            <Col size={3} className="valign-wrapper" style={{height: "100%"}}>
                                {
                                    this.props.canvasMode === "create" ?
                                    <button className='btn-flat waves-effect waves-light yellow' name="create" onClick={this.handleSumbit} type='submit'>Create
                                    <i className='material-icons right'>send</i>
                                    </button>
                                    :
                                    <button className='btn-flat waves-effect waves-light yellow' name="edit" onClick={this.handleSumbit} type='submit'>Save
                                    <i className='material-icons right'>send</i>
                                    </button>
                                }
                            </Col>  
                    </div>
                    </Card>
            </div>
        );
    };
};

export default CanvasTab;