import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Callback from "./Callback/Callback";
import Navbar from "./components/Navbar/Navbar";
import Park from "./pages/Park";
import School from "./pages/School";
import Business from "./pages/Business"
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/park" component={Park} />
      <Route exact path="/school" component={School} />
      <Route exact path ="/business" component={Business} />
    </div>
  </Router>
)

export default App;
