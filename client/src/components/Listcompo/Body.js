// Import dependencies
//--------------------------------------------------------
import React, { Component } from "react";


class ListBody extends Component{
    state = {
        components: []
    }

    componentItem = (component) => {
        console.log("hello there!")
        return(
            <div className="list-components" key={component._id} style={{backgroundColor: "green"}}>
                <p>id: {component._id}</p>
                <p>name: {component.name}</p>
                <p>html: {component.html}</p>
                <p>css: {component.css}</p>
            </div>
        )
    }

    render(){
        return(
            <div>
                <a>HELLLO THERE!</a>
                {this.props.components.map(component => this.componentItem(component))}
    
            </div>
        );
    };
};

export { ListBody };