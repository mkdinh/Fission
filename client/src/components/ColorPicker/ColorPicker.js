import React from 'react';
import { ChromePicker } from 'react-color';
  
  

const ColorPicker = (props) => 
    
      <div>
      <ChromePicker
        backgroundcolor={"#fff"}
        color={props.background}
        onChangeComplete={props.handleChangeComplete}
      />
      </div>   
  
export default ColorPicker;