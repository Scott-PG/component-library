import React from "react";
import "./TextInput.css";

// This is a functional component - just sent up a little differently as an arrow function!
const TextInput = props => (
  <>
    <label for={props.label}>{props.label}</label>
    <input
      name={props.label}
      label={props.label}
      placeholder={props.placeholder}
      className={props.type}
    />
  </>
);

export default TextInput;
