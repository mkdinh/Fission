// Import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import Fa from "react-fontawesome";
import { Row, Col } from "../../Grid";
import API from "../../../utils/api";

const style = {
    row: {padding: "0.25rem", margin: "0rem", color: "black"},
    deleteIcon: {fontSize: "1.5rem", float: "right"},
    container: {border: "1px solid black", margin: "0.25rem 0.5rem", width: "95.5%", color: "white"}
}

class ListBody extends Component {

    handleDelete= (id) => {
        API.component.deleteOne(id, this.props.auth0Id)
            .then(deleted => {
                this.props.addSnackbar("Successfully deleted component!", "success")
                this.props.updateCustoms(this.props.auth0Id)
    
                if(this.props.activeProject._id){
                    this.props.addProject(this.props.activeProject, true)
                }
                this.addComponent(null, "reset")
            })
            .catch(err => console.log(err))
    }

    handleClick = (component) => {
        this.props.addComponent(component, this.props.tab)
    };

    render(){
        return(
            <div>
                {this.props.components.map(component => 
                    <button key={component._id} className="list-component-item" style={style.container} onClick ={() => this.handleClick(component)}>
                        <Row valign style={style.row}>                    
                            <Col size={10}>
                            {component.name}
                            </Col>
                            <Col size={2}>
                                {
                                    this.props.default ?
                                        ""
                                    :
                                        <a href="#/"
                                        style={style.deleteIcon} 
                                        onClick={(ev) => {ev.preventDefault(); this.handleDelete(component._id)}}>
                                         <Fa name="times"/>
                                        </a>
                                }
                            </Col>
                        </Row>
                    </button>
                )}
            </div>
        )
    }
}

export { ListBody };