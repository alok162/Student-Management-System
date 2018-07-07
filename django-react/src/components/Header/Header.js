import React, { Component } from "react";
import "./Header.css";
import ReactDOM from "react-dom";
import { Routes } from "../../routes";

import "font-awesome/css/font-awesome.min.css";
import NavBar from "../Nav-Bar/NavBar";

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    // this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default Header;
