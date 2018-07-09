import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Login from "../Login/Login";
import "./Signup.css";

import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password1: "",
      password2: "",
      email: ""
    };
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  render() {
    if (localStorage.getItem("student_id") != undefined) {
      this.props.history.push("/Body");
      return null;
    }
    return (
      <div>
        <div class="login-form">
          <form method="post">
            <div class="text-center social-btn">
              <a
                href="#"
                onClick={() => {
                  this.authWithFacebook();
                }}
                class="btn btn-primary btn-lg btn-block"
              >
                <i class="fa fa-facebook" /> Sign in with <b>Facebook</b>
              </a>
              <a
                href="#"
                onClick={() => {
                  this.authWithFacebook();
                }}
                class="btn btn-info btn-lg btn-block"
              >
                <i class="fa fa-twitter" /> Sign in with <b>Twitter</b>
              </a>
              <a
                href="#"
                onClick={() => {
                  this.authWithFacebook();
                }}
                class="btn btn-danger btn-lg btn-block"
              >
                <i class="fa fa-google" /> Sign in with <b>Google</b>
              </a>
            </div>
            <div class="or-seperator">
              <b>or</b>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control input-lg"
                name="username"
                placeholder="Username"
                onChange={this.handleChange.bind(this)}
                value={this.state.username}
                required="required"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control input-lg"
                name="email"
                placeholder="Email"
                onChange={this.handleChange.bind(this)}
                value={this.state.email}
                required="required"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control input-lg"
                name="password1"
                placeholder="Password"
                onChange={this.handleChange.bind(this)}
                value={this.state.password1}
                required="required"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control input-lg"
                name="password2"
                placeholder="Confirm Password"
                onChange={this.handleChange.bind(this)}
                value={this.state.password2}
                required="required"
              />
            </div>
            <div class="form-group">
              <button
                type="button"
                onClick={this.onClick.bind(this)}
                class="btn btn-success btn-lg btn-block login-btn"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onClick(ev) {
    let data = JSON.stringify({
      username: this.state.username,
      email: this.state.email,
      password1: this.state.password1,
      password2: this.state.password2
    });

    axios
      .post("/signup/", data, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        console.log("signup success", res.data);
        this.props.history.push("/login");
      });
  }
}

export default Signup;
