import React, { Component } from "react";
import Fa from "react-fontawesome";
import { Card } from 'material-ui/Card';
import { Row, Col } from "../../components/Grid";
import FissionBtn from "../../components/FissionButton";
import API from "../../utils/api";
import "./reactor.css";
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
    deleteIcon: {fontSize: "2rem"},
    editIcon: {fontSize: "1.5rem", float: "right", marginRight: "2rem"},
    nameInput: {textAlign: "center", fontSize: "2rem"}
}

class ReactorTab extends Component {
    state = {
        activeProject: {},
        reactor: {},
        name: "",
        edit: false
    }

    
    componentWillReceiveProps(props){
        this.setState({
            activeProject: props.activeProject, 
        })
    }

    handleProjectInput = (ev) => {
        let value = ev.target.value;
        this.props.updateActiveProject("str", "name", null, value);
    }

    handleEdit = () => {
        this.setState({
            edit: !this.state.edit, 
            name: this.props.activeProject.name
        })
    }

    handleRemove = (ev) => {
        ev.preventDefault();
        API.project.deleteOne(this.props.activeProject._id)
            .then( project => {
                this.props.updateProjects(this.props.profile.auth0Id, true)
                this.props.addSnackbar('Successfully deleted project', "success")
                this.props.toggleEditProject();
            })
            .catch(err => console.log(err))
    }

    handleSave = (ev) => {
        ev.preventDefault()

        let newComp = this.props.activeProject.components.map(el => el._id);
        if(newComp){
            API.project.saveOne({components: newComp, name: this.props.activeProject.name}, this.props.activeProject._id)
                .then(project => {
                    this.props.addSnackbar(`Successfully saved ${project.data.name}`, "success")
                    this.props.updateProjects()
                    this.props.toggleEditProject();
                })
                .catch(err => console.log(err));
        }else{
            
        }
    }

    handleFuse = (ev) => {
        ev.preventDefault();
        let htmlDOMs = [];

        this.props.activeProject.components.forEach( comp => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(comp.html, "text/xml");
            let dom = doc.firstChild;
    
            comp.css ? dom.setAttribute("style", comp.css) : "";

            let name = comp.name.replace(/\s*/g,"").replace("(",".").replace(")","");
            dom.setAttribute("name", name)
            dom.setAttribute("component", comp.type)
            comp.group ? dom.setAttribute("group", comp.group) : "";
            htmlDOMs.push(dom.outerHTML)
        })  
        
        let project = {
            components: this.props.activeProject.components,
            htmlDOMs: htmlDOMs
        }

        API.project.compile(project, this.props.activeProject._id)
        .then( db => {
                // window.open("http://localhost:3001/api/project/compile/59f628ab3851070f8cb0be42", '_blank')
                this.props.addSnackbar("Successfully compiled your project!")
            })
            .catch( err => console.log(err))
    }

    render(){
        return(
            <div>
                <div style={{position: "relative", marginTop: "1rem"}}>
                    <Col size={6} style={{padding: 0, color: "black"}}>
                        <Card style={{...style.card, width: "100%", height: "65vh", marginRight: "1%", overflow:"scroll", padding: "0.5rem 0"}}>
                        {   
                            this.props.activeProject ?
                                this.props.editActiveProject ? 
                                <input style={style.nameInput} 
                                    value={this.props.activeProject.name} 
                                    onChange={this.handleProjectInput}/>
                                :
                                <div>
                                    {/* <a href="#/" style={style.editIcon} onClick={this.handleEdit}><Fa name="pencil"/></a> */}
                                    <h3 style={style.projectName}>{this.props.activeProject.name}</h3>
                                </div>
                            :
                            <h3 style={style.projectName}><div id="selectTitle">Select a project</div></h3>
                        }
                        {   
                            this.props.reactor.length > 0   ?     
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
                                            {
                                                this.props.editActiveProject ? 
                                                    <a href="#/" data-id={component._id} onClick={this.props.removeFromProject}>
                                                        <Fa style={style.deleteIcon} name="times"/>
                                                    </a>
                                                :
                                                    ""
                                            }
                                        </Col>
                                    </Row>
                                </div>)
                            :
                            "No component added to this project"
                        }
                        </Card>

                        
                        {
                            this.props.editActiveProject ?
                                <FissionBtn bg={"#c1ff07"} handleClick={this.handleSave} style={{marginTop: "1rem", color: "black"}} label="Save It"/>
                            :
                            ""
                        }
                        
                    </Col>

                    <Col size={6} style={{width: "49%", marginLeft: '1%', padding: 0 }}>
                        <div className="valign-wrapper" style={{...style.card, height: "35vh", width: "100%", color: "black"}}>
                        {
                            this.props.preview.html && this.props.preview.css? 
                            <div
                            style={{width: "100%",textAlign: "center"}} 
                            dangerouslySetInnerHTML={this.props.strToDOM(this.props.preview.html, this.props.preview.css)}/>
                            : ""
                        }
                        </div>

                        <div className="valign-wrapper" style={{...style.card, height: "27.50vh", width: "100%", marginTop: "1rem", color: "black"}}>

                        {
                            this.props.preview ? 
                            <div style={{margin: "1rem"}}>
                            <p id="nameDiv">Name:{this.props.preview.name}</p>
                            <p id="groupDiv">Group:{this.props.preview.group}</p>
                            </div>
                            : ""
                        }
                    
                        </div>

                        {
                            this.props.editActiveProject ?
                                <FissionBtn 
                                    handleClick={this.handleRemove} 
                                    bg={"#ff4507"} style={{marginTop: "1rem", color: "black"}} 
                                    label="Delete"/>
                            :
                            ""
                        }
                    </Col>
                </div>
                {
                    this.props.activeProject._id && !this.props.editActiveProject?
                        <FissionBtn 
                            handleClick={this.handleFuse} 
                            bg={"#ffc107"} style={{marginTop: "1rem", color: "black"}} 
                            label="Fuse"/>
                    :
                    ""
                }
            </div>
        );
    };
};

export default ReactorTab;