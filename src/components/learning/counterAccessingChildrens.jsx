import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement({ id: 9 });
          }}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
        <br />
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  formateCount() {
    const { value } = this.state;
    return value === 0 ? <h1> Zero </h1> : value;
  }
}

export default Counter;
