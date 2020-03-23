import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.startValue,
      min: this.props.min,
      max: this.props.max,
      step: this.props.step
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let temp = this.state.number + this.state.step;
    this.setState({
      number: temp
    });
  }
  decrease() {
    let temp = this.state.number - this.state.step;
    this.setState({
      number: temp
    });
  }
  render() {
    return (
      <div className="counter">
        <button
          className="ctr-minus"
          onClick={this.state.number > this.props.min && this.decrease}
        >
          -
        </button>
        <p className="ctr-number">{this.state.number}</p>
        <button
          className="ctr-plus"
          onClick={this.state.number < this.props.max && this.increase}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
