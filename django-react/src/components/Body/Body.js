import React, { Component } from "react";
import "./Body.css";
import Header from "../Header/Header";
import NavBarBottom from "../Nav-Bar-Bottom/NavBarBottom";

class Body extends Component {
  render() {
    return (
      <div>
        <Header />

        <div class="contain" />

        <NavBarBottom />
      </div>
    );
  }
}

export default Body;
