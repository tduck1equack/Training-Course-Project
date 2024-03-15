import React from "react";
import "./style/Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <p>Double-click to edit a todo</p>
        <p>Created by the TodoMVC Team</p>
        <p>
          Part of <a href="https://todomvc.com/">TodoMVC</a>
        </p>
      </div>
    );
  }
}
