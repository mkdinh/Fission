import React from 'react';
import { ChromePicker } from 'react-color';
import "./ColorPicker.css";
  
const style = {
  margin: "auto"
}

const ColorPicker = (props) =>
  <div style={{textAlign:"center"}}>
    <div style={{width: "50%", margin: "auto"}}>    
      <ChromePicker
        backgroundcolor={"#fff"}
        style={style}
        color={props.background}
        onChange={props.handleChange}
        width={"50%"}/> 
    </div> 
  </div>
export default ColorPicker;