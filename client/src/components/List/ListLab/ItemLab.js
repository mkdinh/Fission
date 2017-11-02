import React from "react"
import { Row, Col } from "../../Grid";

const style = {
    item: {borderBottom: "1px solid grey", fontSize: "1rem", color: "black"},
    font: {fontSize: "1rem", color: "black"}
}

const ItemLab = (props) => 
    <Row style={style.item}>
        <Col size={2}>

        </Col>
        <Col size={6}>
            <p style={style.font}>Name: {props.component.name}</p>
            <p style={style.font}>Group: {props.component.group}</p>
        </Col>
        <Col size={4}>
            <div className="valign-wrapper">
                <div style={{width: "100%",textAlign: "center"}} 
                    dangerouslySetInnerHTML={props.strToDOM(props.component.html, props.component.css || "")}/>
            </div>
        </Col>
    </Row>

export default ItemLab;