import React from "react";
import "./InputButton.css";
import TextInput from "./TextInput";

// This is a functional component - just sent up a little differently as an arrow function!
const InputButton = props => (
  <form className="input-button-form">
    <TextInput
      type={props.textType}
      label={""}
      placeholder={props.placeholder}
    />
    <button
      className={"input-button " + props.typeButton}
      onClick={props.onClick}
    >
      {" "}
      {props.labelButton}
    </button>
  </form>
);

export default InputButton;
