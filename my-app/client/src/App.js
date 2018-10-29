import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Callback from "./Callback/Callback";
import Navbar from "./components/Navbar/Navbar";
import Park from "./pages/Park";
import School from "./pages/School";
import Business from "./pages/Business"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
