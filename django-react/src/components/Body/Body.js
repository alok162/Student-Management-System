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
      listOfRegCourses: [],
      listOfAvailCourses: []
    };
  }

  onClickProductDeleted(cell, row, rowIndex) {
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

  onClickProductSelected(cell, row, rowIndex) {
    console.log(row, row["id"]);
    let data = JSON.stringify({
      student: 11,
      course: row["id"]
    });
    axios
      .post("/register_course/", data, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        }
      })
      .then(res => {
        console.log("list of registred courses", res.data);
      });
    this.componentWillMount();
  }

  cellButton(cell, row, enumObject, rowIndex) {
    return (
      <button
        type="button"
        onClick={() => this.onClickProductDeleted(cell, row, rowIndex)}
      >
        <i class="fa fa-trash" aria-hidden="true" />
      </button>
    );
  }

  cellAddButton(cell, row, enumObject, rowIndex) {
    return (
      <button
        type="button"
        onClick={() => this.onClickProductSelected(cell, row, rowIndex)}
      >
        <i class="fa fa-plus" aria-hidden="true" />
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
        this.setState({ listOfRegCourses: res.data });
        console.log("list of registred courses", this.state.listOfRegCourses);
      });

    axios
      .get("/available_course/11/", {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        }
      })
      .then(res => {
        this.setState({ listOfAvailCourses: res.data });
        console.log("list of registred courses", this.state.listOfAvailCourses);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div class="title">
          <h4>List to Registered subject</h4>
        </div>
        <hr />
        <div class="reg-course">
          <BootstrapTable data={this.state.listOfRegCourses} striped hover>
            <TableHeaderColumn isKey dataField="course_name">
              Subject
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="button"
              dataFormat={this.cellButton.bind(this)}
            />
          </BootstrapTable>
        </div>

        <hr />
        <h4 class="title">Available subject for Registration</h4>
        <div class="reg-course">
          <BootstrapTable data={this.state.listOfAvailCourses} striped hover>
            <TableHeaderColumn isKey dataField="course_name">
              Subject
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="button"
              dataFormat={this.cellAddButton.bind(this)}
            />
          </BootstrapTable>
        </div>
      </div>
    );
  }

  onClick(ev) {
    console.log();
  }
}

export default Body;
