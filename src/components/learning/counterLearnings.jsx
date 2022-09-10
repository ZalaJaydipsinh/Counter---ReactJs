import React, { Component } from "react";

class Counter extends Component {
  //state contains the data which will be dinamically required by this component
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };
  render() {
    return (
      //we need to reaturn only single html element and every time div is not necessary so React.Fragment is used to wrap div
      <React.Fragment>
        {/* 
         - use className to apply class property
         - to apply style can create style object in this component
         */}
        <img src={this.state.imageUrl} alt="random pic" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formateCount()}
        </span>
        <button style={{ fontSize: 20 }} className="btn btn-secondary m-2">
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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
