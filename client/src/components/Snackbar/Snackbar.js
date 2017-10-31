import React from 'react';
import "./Snackbar.css";


export default (props) =>

  <div className={`snackbar ${props.type}`}>
    {props.message}
  </div>
