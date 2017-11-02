import React from "react";
import ItemLab from "./ItemLab";

const ListLab = (props) =>

    <div>
        {
            props.components.map( component => 
                <ItemLab component={component} 
                        customs={props.customs}
                        addSnackbar={props.addSnackbar}
                        auth0Id={props.auth0Id}
                        strToDOM={props.strToDOM}/>)
        }
    </div>

export default ListLab;