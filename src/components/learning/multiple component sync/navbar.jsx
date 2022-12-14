import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill badge-secondary m-1">{this.props.totalCounters}</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
