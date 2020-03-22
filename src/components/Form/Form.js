import React from "react";
import "./Form.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Form = props => <form className={props.type}>{props.label}</form>;

export default Form;
