import React from 'react';
import { ChromePicker } from 'react-color';

class ColorPicker extends React.Component {
  state = {
    background: 'green',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    let boxStyle = {
      backgroundColor: this.state.background,
      height: 150,
      width: 150,
      border: "2px solid red"
    }
    return (
      <div>
      <ChromePicker
        backgroundcolor={ "#fff"}
        color={this.state.background}
        onChangeComplete={ this.handleChangeComplete }
      />
      <div style={boxStyle}></div>
      </div>
    );
  }
}
export default ColorPicker;