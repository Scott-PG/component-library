import React from "react";
import "./Checkbox.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Checkbox = props => (
  <>
    <label className={props.boxColor}>
      <input type="checkbox" />
      {props.label}
      <span class={props.checkStyle}></span>
    </label>
  </>
);
export default Checkbox;
