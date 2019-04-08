import React, { Component } from "react";
import "./App.css";
import Calculator from "../Calculator/Calculator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>React Mortgage Calculator</h3>
        <Calculator />
      </div>
    );
  }
}

export default App;
