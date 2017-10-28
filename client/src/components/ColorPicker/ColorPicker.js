import React from 'react';
import { ChromePicker } from 'react-color';
import "./ColorPicker.css";
  

const ColorPicker = (props) => 
    
      <div>
        <div id="colorTitle" style={{
         fontSize: 22,
         textAlign: "center",
         marginLeft: "14%",
         fontFamily: "Permanent Marker"

        }}>Choose a box color</div>
        <div   style={{
          marginLeft: "10%"
        }}>
      <ChromePicker
        backgroundcolor={"#fff"}
        color={props.background}
        onChangeComplete={props.handleChangeComplete}
      
      />
      </div>
      </div>   
  
export default ColorPicker;