import React, { Component } from "react";
import "./Body.css";
import Header from "../Header/Header";

class Body extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="title">
          <h4>Welcome to Registration</h4>
        </div>
      </div>
    );
  }
}

export default Body;
