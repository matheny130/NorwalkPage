import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import NavTabs from "./components/NavTabs";
//import Callback from "./Callback/Callback";
//import Navbar from "./components/Navbar/Navbar";
import Park from "./components/Pages/Park";
import School from "./components/Pages/School";
import Business from "./components/Pages/Business"
import './App.css';

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/park" component={Park} />
      <Route exact path="/school" component={School} />
      <Route exact path="/business" component={Business} />
    </div>
  </Router>
);

export default App;
