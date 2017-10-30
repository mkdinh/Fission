// Import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import Fa from "react-fontawesome";
import { Row, Col } from "../../Grid";
import API from "../../../utils/api";

const style = {
    row: {padding: "0.25rem", margin: "0rem"},
    deleteIcon: {fontSize: "1.5rem", float: "right"},
    container: {border: "1px solid black", margin: "0.25rem 0.5rem", width: "95.5%", backgroundColor: "white"}
}

class ListBody extends Component {

    handleDelete= (id) => {
        API.component.deleteOne(id)
            .then(deleted => {
                this.props.addSnackbar("Successfully deleted component!", "success")
                this.props.updateCustoms(this.props.auth0Id)
                this.props.addComponent({}, this.props.tab)
            })
            .catch(err => console.log(err))
    }

    handleClick = (component) => {
        this.props.updateActiveHTML(component.html);
        this.props.addComponent(component, this.props.tab, () => {
            if(this.props.listName === "customs"){
                this.props.updateActiveCSS(null, null, true);
            };
        });
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