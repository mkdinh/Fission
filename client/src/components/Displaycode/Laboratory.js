import React, { Component } from "react";
import { Col, Row } from "../Grid";
import { Card } from 'material-ui/Card';
import API from "../../utils/api";
import LabList from "../List/ListLab";
import "./Laboratory.css";

const style = {
    card: { position: "relative", backgroundColor: "white", padding: 0, color: "black"},
    row: {margin: "0 3rem", padding: "0 0 2rem 0"},
    display: {overflow : "scroll", height: "57vh"}
}

class Laboratory extends Component {
    state = {
        search: "",
        components: [],
        filter: []
    }

    componentDidMount(){
        API.component.findAll()
            .then( db => this.setState({components: db.data}))
            .catch( err => console.log(err));
    }

    handleChange = (ev) => {
        let {name , value} = ev.target;
        this.setState({[name]: value});
        value = value.replace(/\\/g,"");
        let regExp = new RegExp(value, "gi");
        let filter = this.state.components.filter(el => el.name.match(regExp))
        this.setState({filter: filter})
    }

    render(){
        return(
            <Card style={style.card}>
                <div style={style.row}>
                    <Row style={{marginBottom: 0, color: "black"}}>
                        <input name="search" 
                            placeholder="R&amp;D: Search your Component"
                            value={this.state.value} 
                            onChange={this.handleChange}/>
                    </Row>

                    <Row style={style.display}>
                        <LabList components={this.state.filter} 
                            customs={this.props.customs}
                            addSnackbar={this.props.addSnackbar}
                            auth0Id={this.props.auth0Id}
                            search={this.state.search}
                            strToDOM={this.props.strToDOM}/>
                    </Row>
                </div>
            </Card>        
        )
    }
};

export default Laboratory;