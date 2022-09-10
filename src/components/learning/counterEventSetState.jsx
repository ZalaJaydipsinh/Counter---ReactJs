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

  handleIncrement = (product) => {
    console.log(product);
    // console.log("increment clicked...", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>
          {this.formateCount()}
        </span>
        <button onClick={()=>{this.handleIncrement({id:9})}} className="btn btn-secondary m-2">
          Increment
        </button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formateCount() {
    const { count } = this.state;
    return count === 0 ? <h1> Zero </h1> : count;
  }
}

export default Counter;
