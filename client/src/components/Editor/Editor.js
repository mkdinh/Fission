import ReactAce from 'react-ace';
import React, { Component } from 'react';

import 'brace/mode/javascript';
import 'brace/theme/ambiance';

class CodeEditor extends Component {
  contructor(props) {
    this.onChange = this.onChange.bind(this);
  }

  onChange = (value) => {
    this.props.updateDOM(value);
  }

  render() {
    return (
      <ReactAce
      mode="HTML"
      theme="ambiance"
      onChange={this.onChange}
      name="canvas_editor"
      width="100%"
      value={this.props.code}
      editorProps={{$blockScrolling: true}}
      />
    );
  }
}

export default CodeEditor;