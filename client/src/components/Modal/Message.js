// import depedencies
//--------------------------------------------------------
import React, { Component } from "react";

// create new message modal that render messages as prop
//--------------------------------------------------------
class MessageModal extends Component{
    state = {
        open: false
    }

    handleClose = () => {

    }

    render(){
        return(
            <div>
                {this.props.message}
            </div>
        )
    }
};

export { MessageModal };