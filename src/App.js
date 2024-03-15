import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Footer from "./components/Footer";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div className="margin-container">
        <Header />
        <Input />
        <Footer />
      </div>
    );
  }
}

export default App;
