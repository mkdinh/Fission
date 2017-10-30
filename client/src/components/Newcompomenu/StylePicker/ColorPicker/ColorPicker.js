import React from 'react';
import { SketchPicker } from 'react-color';
import "./ColorPicker.css";
  

const ColorPicker = (props) => 
    
      <div>
        <div id="colorTitle" style={{
         fontSize: 22,
         textAlign: "center",
         marginLeft: "14%",
         fontFamily: "Permanent Marker"

        }}>Choose a box color</div>
        <div>
      <SketchPicker
        backgroundcolor={"#fff"}
        color={props.background}
        onChange={props.handleChange}
        width={480}
        disableAlpha={true}
      
      />
      </div>
      </div>   
  
export default ColorPicker;