import React from "react";
import "./style/Footer.css";
import { ThemeConsumer, ThemeContext } from "./style/theme";

export default class Footer extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div className="footer">
            <p style={{ color: theme.textColor }}>
              Double-click to edit a todo
            </p>
            <p style={{ color: theme.textColor }}>
              Created by the TodoMVC Team
            </p>
            <p style={{ color: theme.textColor }}>
              Part of{" "}
              <a style={{ color: theme.textColor }} href="https://todomvc.com/">
                TodoMVC
              </a>
            </p>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}
Footer.contextType = ThemeContext;
