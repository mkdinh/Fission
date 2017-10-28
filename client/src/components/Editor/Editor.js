import ReactAce from 'react-ace';
import React, { Component } from 'react';
import brace from 'brace';

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
      mode="javascript"
      theme="ambiance"
      onChange={this.onChange}
      name="UNIQUE_ID_OF_DIV"
      width="100%"
      value={this.props.code}
      /* editorProps={{$blockScrolling: true}} */
      />
      // <ReactAce
      //   mode="javascript"
      //   theme="github"
      //   setReadOnly={false}
      //   onChange={this.onChange}
      //   value
      //   style={{ height: '100%', width: "100%" }}
      //   ref={instance => { this.ace = instance; }} // Let's put things into scope
      //   editorProps={{
      //     $blockScrolling: Infinity
      //   }}
      // />
    );
  }
}

export default CodeEditor;