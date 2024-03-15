import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="margin-container">
        <Header />
        <Input />
      </div>
    );
  }
}

export default App;
