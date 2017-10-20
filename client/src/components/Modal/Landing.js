// import depedencies
//--------------------------------------------------------
import React, { Component } from "react";

const style = {
    msg: {fontSize: "2rem"}
}

// create new message modal that render when returning user logged in
//--------------------------------------------------------
class MessageModal extends Component{
    state = {
        open: false
    }

    handleClose = () => {
        
    }

    render(){
        return(
            <p style={style.msg}></p>
        )
    };
};

export { MessageModal };