import ReactAce from 'react-ace-editor';
import React, { Component } from 'react';
 
class CodeEditor extends Component {
  contructor(props) {
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(props){
    console.log(this.ace)
  }

  onChange = (newValue, e) => {
    console.log(newValue, e);
    const editor = this.ace.editor; // The editor object is from Ace's API
    console.log(editor.getValue()); // Outputs the value of the editor
  }

  render() {
    return (
      <ReactAce
        mode="javascript"
        theme="eclipse"
        setReadOnly={false}
        onChange={this.onChange}
        style={{ height: '100%', width: "100%" }}
        ref={instance => { this.ace = instance; }} // Let's put things into scope
      />
    );
  }
}

export default CodeEditor;