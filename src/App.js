import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ThemeConsumer, ThemeContext } from "./components/style/theme";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div
            className="background"
            style={{ backgroundColor: theme.background }}
          >
            <div className="margin-container">
              <Header />
              <Main />
              <Footer />
            </div>
          </div>
        )}
      </ThemeConsumer>
    );
  }
}
App.contextType = ThemeContext;
export default App;
