import React, { Component } from "react"
import { Row, Col } from "../../Grid";
import Fa from "react-fontawesome";
import API from "../../../utils/api";
const style = {
    item: {borderBottom: "1px solid grey", fontSize: "1rem", color: "black", marginBottom: 0},
    font: {fontSize: "1rem", color: "black"}
}

class ItemLab extends Component { 

    state = {
        loading: false
    }

    addComponent = () => {
        let exists = this.props.customs.filter( el => el._id = this.props.component._id).length > 0;
        if(exists){
            this.props.addSnackbar("you already have this component", "error")
        }else{
            API.component.create(this.props.component, this.props.auth0Id)
                .then( comp => {
                    this.props.addSnackbar(`Successfully added ${this.props.component.name}!`, "success")
                })
                .catch(err => console.log(err))
        }
    }

    render(){
        return(
            <Row style={style.item}>
                <Col size={2}>
                    <div className="valign-wrapper" style={{height: "15vh"}}>
                        <div style={{width: "100%", textAlign: "center", fontSize: "1.5rem"}}>
                            <a href="#" onClick={this.addComponent}><Fa name="plus"/></a>
                        </div>
                    </div>
                </Col>
                <Col size={6}>
                    <div className="valign-wrapper" style={{height: "13vh", margin: "1rem 0", borderLeft: "1px solid grey", borderRight: "1px solid grey"}}>
                        <p style={style.font}>Name: {this.props.component.name}</p>
                        <p style={style.font}>Group: {this.props.component.group}</p>
                    </div>
                </Col>
                <Col size={4}>
                    <div className="valign-wrapper" style={{height: "15vh"}}>
                        <div style={{width: "100%",textAlign: "center"}} 
                            dangerouslySetInnerHTML={this.props.strToDOM(this.props.component.html, this.props.component.css || "")}/>
                    </div>
                </Col>
            </Row>
        )
    }
};

export default ItemLab;