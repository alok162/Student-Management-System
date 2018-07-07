import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./animate.css";
import "./style.css";
import "./styles/foundation.min.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { Routes } from "./routes";

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
