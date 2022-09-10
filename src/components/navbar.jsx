import React, { Component } from "react";

//stateless functional component
// const NavBar = (props) => { // we used object argument destructuring to avoid long way to accessing properties. i.e. props.xyz
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-1">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
