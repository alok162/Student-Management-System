import React, { Component } from "react";
import "./Body.css";
import Header from "../Header/Header";
import axios from "axios";
var ReactBsTable = require("react-bootstrap-table");
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfCourses: []
    };
  }

  onClickProductSelected(cell, row, rowIndex) {
    console.log(row, row["enrollment_id"]);
    axios
      .delete("/delete_course/" + row["enrollment_id"] + "/", {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        }
      })
      .then(res => {
        console.log("list of registred courses", res.data);
      });
  }

  cellButton(cell, row, enumObject, rowIndex) {
    return (
      <button
        type="button"
        onClick={() => this.onClickProductSelected(cell, row, rowIndex)}
      >
        <i class="fa fa-trash" aria-hidden="true" />
      </button>
    );
  }

  componentWillMount() {
    axios
      .get("/list_course/11/", {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        }
      })
      .then(res => {
        this.setState({ listOfCourses: res.data });
        console.log("list of registred courses", this.state.listOfCourses);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div class="title">
          <h4>Welcome to Registration</h4>
        </div>
        <hr />
        <div class="reg-course">
          <BootstrapTable data={this.state.listOfCourses} striped hover>
            <TableHeaderColumn isKey dataField="course_name">
              Subject
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="button"
              dataFormat={this.cellButton.bind(this)}
            />
          </BootstrapTable>
          {/* <ul>
            {this.state.listOfCourses.map(function(user, i) {
              return (
                <li key={i}>
                  {user.course_name}{" "}
                  <button
                    onClick={this.onClick.bind(this)}
                    type="button"
                    class="fa fa-trash"
                    aria-hidden="true"
                  />
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
    );
  }

  onClick(ev) {
    console.log();
  }
}

export default Body;
