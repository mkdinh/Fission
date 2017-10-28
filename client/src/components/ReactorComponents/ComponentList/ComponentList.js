// import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import {Tabs, Tab} from 'material-ui/Tabs';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const style = {
    card: {width: "100%", margin: "1rem"},
    wrapper: {height: "50vh"}
};

// create list of components
//--------------------------------------------------------
class ComponentList extends Component {
    state = {

    }

    render(){
        return(
            <Card style={style.card}>
                <Tabs>
                    <Tab title="Components">
                        <div id="reactor-list-wrapper" style={style.wrapper}>

                        </div>
                    </Tab> 
                </Tabs>
            </Card>
        );
    };
};

export { ComponentList };