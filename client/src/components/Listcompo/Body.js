// Import dependencies
//--------------------------------------------------------
import React, { Component } from "react";
import { Draggable, Droppable } from 'react-drag-and-drop';

const style = {
    container: {border: "9px dashed #121112 !important", margin: "0.2rem 0", width: "100%", backgroundColor: "#ffc107 !important"}
}

const ListBody = (props) => 

    <div>
        {props.components.map(component => 
            <Draggable key={component._id}>
            <button style={style.container} onClick ={() => {props.handleClick(component)}}>
                {component.name}
            </button>
            </Draggable>
        )}
    </div>


export { ListBody };