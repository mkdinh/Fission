import React, { Component } from 'react';
import {Container, Row, Col} from "../../components/Grid";
import Newcompomenu from "../../components/Newcompomenu";
import Previewdisplay from "../../components/Displaycode";
import ListCanvas from "../../components/List/ListCanvas";
import ListReactor from "../../components/List/ListReactor";
import API from "../../utils/api"
import { connect } from "react-redux";
import action from "../../utils/actions";
import Snackbar from "../../components/Snackbar";

const mapStateToProps = state => {
  return {
    profile: state.user.profile,
    defaults: state.component.defaults,
    customs: state.component.customs,
    projects: state.project.projects
  }
}

class Canvas extends Component {

    state = {
      reactor: [],
      preview: {},
      active: {},
      activeCSS: {},
      activeProject: {},
      editActiveProject: false,
      snackbars: [],
      canvasMode : "create",
      sidebar: false,
      editor: true,
      tab: "canvas"
    }

  componentDidMount(){
    if(localStorage.getItem("auth0Id")){
      let auth0Id = localStorage.getItem("auth0Id");
      this.props.dispatch(action.login(auth0Id));
      this.props.dispatch(action.getDefaults())
      this.updateCustoms(auth0Id);
      this.updateProjects(auth0Id);
    }
  }

  updateCustoms = (id, active) => {
    var id = id || this.props.profile.auth0Id;

    this.props.dispatch(action.getCustoms(id))
    if(active){
      this.setState({active: active})
    }
  }

  updateProjects = (id, reset) => {
    var id = id || this.props.profile.auth0Id;
    this.props.dispatch(action.getProjects(id))
    if(reset){
      this.setState({activeProject: {}, reactor: []})
    }
  }
  
  
  updateTab = (tab) => {
    this.setState({tab: tab})
    if(tab === "reactor" && this.state.sidebar){
      this.setState({sidebar: false})
    }
  }

  toggleEditProject = () => this.setState({editActiveProject: !this.state.editActiveProject})

  toggleSidebar = () => this.setState({sidebar: !this.state.sidebar})

  toggleEditor = () => this.setState({editor: !this.state.editor})

  updatePreview = (newCompo) => this.setState({preview: newCompo})

  updateCanvasMode = (tab) => this.setState({canvasMode: tab.props.mode})

  updateActiveProject = (project) => {
    API.project.findOne(project._id)
      .then(db => {
        let project = db.data;
        this.setState({activeProject: project, reactor: project.components})
      })
      .catch(err => console.log(err))
  }

  updateActiveCSS = (style, value, reset) => {
    if(!reset){
      this.setState({activeCSS: {...this.state.activeCSS, [style]: value}})
    }else{
      this.setState({activeCSS: {}})
    }
  }

  

  addSnackbar = (message, type) => {
    let snack = {
        message: message, 
        type: type, 
        time: Date.now()
      }

    this.setState({snackbars: [...this.state.snackbars, snack]})
    setTimeout(() => {
      let removed = this.state.snackbars.filter(el => el.time !== snack.time);
      this.setState({snackbars: removed})
    }, 3000)

  }
  
  addComponent = (newCompo, context) => {
    switch(context){
      case "canvas":
        this.setState({active: newCompo});
        break
      case "reactor":
        let exists = this.state.reactor.filter(comp => comp._id === newCompo._id)
        if(exists.length === 0){
          this.setState({reactor: [...this.state.reactor, newCompo]})
        }else{
          this.addSnackbar("You already added this component", "warning")
        }
        break
      case "preview":
        this.setState({preview: newCompo})
        break
      default:
        return ""
    }
  }


  removeFromProject = (ev) => {
    ev.preventDefault();
    let id = ev.currentTarget.getAttribute("data-id");
    let removed = this.state.reactor.filter( el => el._id !== id)
    this.setState({reactor: removed})
  }

  render(){
  return(

      <Container style={{width: "80%", height: "100%", margin: "0 auto"}}>
        <Newcompomenu 
        sidebar={this.state.sidebar}
        activeCSS={this.state.activeCSS}
        updateActiveCSS={this.updateActiveCSS}/>

        <Row>
          <Col size={4}>
            { this.state.tab === "canvas" ?
              <ListCanvas
                tab={this.state.tab}
                defaults={this.props.defaults}
                customs={this.props.customs}
                updateCustoms={this.updateCustoms}
                updateActiveCSS={this.updateActiveCSS}
                addComponent={this.addComponent}
                addSnackbar={this.addSnackbar}
                updateCanvasMode={this.updateCanvasMode}/>
            :
              <ListReactor
              profile={this.props.profile}
              customs={this.props.customs} 
              projects={this.props.projects}
              addComponent={this.addComponent}
              updateProjects={this.updateProjects}
              toggleEditProject={this.toggleEditProject}
              editActiveProject={this.state.editActiveProject}
              updateActiveProject={this.updateActiveProject}
              addSnackbar={this.addSnackbar}
              tab={this.state.tab}/>  
            }

            {this.state.snackbars.map( snack => 
              <Snackbar message={snack.message} type={snack.type}/>
            )}
          </Col> 

          <Col size={8}>    
            <Previewdisplay
              profile={this.props.profile}
              active={this.state.active}
              activeProject={this.state.activeProject}
              activeCSS={this.state.activeCSS}
              editor={this.state.editor}
              canvasMode={this.state.canvasMode}
              toggleSidebar={this.toggleSidebar}
              toggleEditor={this.toggleEditor}
              updateTab={this.updateTab}
              tab={this.state.tab}
              reactor={this.state.reactor}
              customs={this.props.customs}
              updateCustoms={this.updateCustoms}
              updateProjects={this.updateProjects}
              removeFromProject={this.removeFromProject}
              toggleEditProject={this.toggleEditProject}
              editActiveProject={this.state.editActiveProject}
              addComponent={this.addComponent}
              addSnackbar={this.addSnackbar}
              preview={this.state.preview}/>
          </Col>

        </Row>
      </Container>
  )};
}

export default connect(mapStateToProps)(Canvas);