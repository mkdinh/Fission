import React from "react";
import ItemLab from "./ItemLab";

const ListLab = (props) =>

    <div>
        {
            props.components.map( component => <ItemLab component={component} strToDOM={props.strToDOM}/>)
        }
    </div>

export default ListLab;