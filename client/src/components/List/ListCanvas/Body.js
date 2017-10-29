// Import dependencies
//--------------------------------------------------------
import React from "react";

const style = {
    container: {border: "1px solid black", margin: "0.25rem 0.5rem", width: "95.5%", backgroundColor: "white"}
}

const ListBody = (props) => 

    <div>
        {props.components.map(component => 
            <button key={component._id} className="list-component-item" style={style.container} onClick ={() => {props.addComponent(component,props.tab)}}>
                {component.name}
            </button>
        )}
    </div>


export { ListBody };