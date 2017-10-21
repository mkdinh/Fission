// Import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import { Draggable, Droppable } from 'react-drag-and-drop';


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
                 <Draggable type="usercompo" data={component.html}><span><p>html: {component.html}</p></span></Draggable>
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