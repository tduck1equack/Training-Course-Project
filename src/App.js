import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="margin-container">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
