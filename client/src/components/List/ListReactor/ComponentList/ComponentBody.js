// Import dependencies
//--------------------------------------------------------
import React from "react";

const style = {
    container: {border: "1px solid black", margin: "0.25rem 0.5rem", width: "95.5%", backgroundColor: "white"}
}

const ComponentBody = (props) => 

    <div>
        {props.components.map(component => 
            <button className="list-component-item" 
                key={component._id}
                style={style.container} 
                onMouseOver={()=> props.addComponent(component, "preview")}
                onClick ={() => {props.updateActiveProject("array", "components", null, component)}}>
                {component.name}
            </button>
        )}
    </div>


export default ComponentBody;