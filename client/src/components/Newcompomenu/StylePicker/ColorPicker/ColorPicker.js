import React from 'react';
import { SketchPicker } from 'react-color';
import "./ColorPicker.css";
  
const style = {
  margin: "auto"
}

const ColorPicker = (props) =>
  <div style={{textAlign:"center"}}>
    <div style={{width: "100%"}}>    
      <SketchPicker
        backgroundcolor={"#fff"}
        style={style}
        color={props.background}
        onChange={props.handleChange}
        width={"480px"}/> 
    </div> 
  </div>
export default ColorPicker;