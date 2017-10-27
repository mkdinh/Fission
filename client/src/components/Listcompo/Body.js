// Import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import { Draggable, Droppable } from 'react-drag-and-drop';

const style = {
    container: {border: "1px solid black", margin: "0.2rem 0", width: "100%", backgroundColor: "white"}
}

const ListBody = (props) => 

    <div>
        {props.components.map(component => 
            <Draggable key={component._id}>
            <button className="list-component-item" style={style.container} onClick ={() => {props.handleClick(component)}}>
                {component.name}
            </button>
            </Draggable>
        )}
    </div>


export { ListBody };