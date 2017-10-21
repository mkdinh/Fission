// Import dependencies
//--------------------------------------------------------
import React, { Component } from "react";


class ListBody extends Component{
    state = {
        components: []
    }

    componentItem = (component) => {
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
                {this.props.components.map(component => <div>{component.name}</div>)}
    
            </div>
        );
    };
};

export { ListBody };