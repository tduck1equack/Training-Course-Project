import React from "react";
import { ThemeChanger, ThemeContext } from "../style/theme";
class ThemeButton extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { theme, changeTheme } = this.context;
    return (
      <ThemeChanger>
        <button onClick={changeTheme} style={{ backgroundColor: theme.button }}>
          Theme
        </button>
      </ThemeChanger>
    );
  }
}
ThemeButton.contextType = ThemeContext;
export default ThemeButton;
