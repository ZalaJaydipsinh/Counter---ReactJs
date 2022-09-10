import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement(){
  //   //gives undefined = this
  //   console.log('increment clicked...',this);
  // }

  handleIncrement = () => {
    console.log("increment clicked...", this);
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
