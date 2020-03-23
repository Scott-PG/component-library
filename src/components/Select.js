import React, { Component } from "react";
import "./Select.css";

// This is a functional component - just sent up a little differently as an arrow function!
class Select extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let choiceArray = this.props.choiceArray;
    let options = choiceArray.map(data => (
      <option key={data.selector} value={data.selector}>
        {data.name}
      </option>
    ));

    return (
      <select className={this.props.type}>
        <option key="0" value="0" disabled selected>
          {this.props.initial}
        </option>
        {options}
      </select>
    );
  }
}

export default Select;
