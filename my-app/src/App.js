import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
//import NavTabs from "./components/NavTabs";
//import Callback from "./Callback/Callback";
import Navbar from "./components/Navbar/Navbar";
import Park from "./components/Pages/Park";
import School from "./components/Pages/School";
import Business from "./components/Pages/Business"
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/parks" component={Park} />
      <Route exact path="/schools" component={School} />
      <Route exact path="/businesses" component={Business} />
    </div>
  </Router>
);

export default App;
