import React from 'react';
import { ChromePicker } from 'react-color';
  
  

const ColorPicker = (props) => 
    
      <div>
        <div style={{
          textDecoration: "underline",
          fontWeight: "bold",
          fontSize: 22,
         textAlign: "left",
         marginLeft: "14%"

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