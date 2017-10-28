// import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
    card: {width: "100%", margin: "1rem"},
    wrapper: {height: "75vh"}
};

// create container for compiling codes
//--------------------------------------------------------
class Compiler extends Component {
    state = {

    }

    render(){
        return(
            <Card style={style.card}>
                <div id="reactor-compiler-wrapper" style={style.wrapper}>

                </div>
            </Card>
        );
    };
};

export { Compiler };