// Import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import { Draggable, Droppable } from 'react-drag-and-drop';

const style = {
    container: {border: "1px solid black", margin: "0.25rem 0.5rem", width: "95.5%", backgroundColor: "white"}
}

const ListBody = (props) => 

    <div>
        {props.components.map(component => 
            <button className="list-component-item" style={style.container} onClick ={() => {props.handleClick(component)}}>
                {component.name}
            </button>
        )}
    </div>


export { ListBody };