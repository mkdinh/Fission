import React from 'react';
import { SketchPicker } from 'react-color';
import "./ColorPicker.css";

class ColorPicker extends React.Component {

  handleChange(color, event) {
    
  }

  render() {
  return (<SketchPicker onChange={ this.handleChange } 
        />
);

  }
}

export {ColorPicker};