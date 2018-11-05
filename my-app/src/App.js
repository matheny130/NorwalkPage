import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
//import NavTabs from "./components/NavTabs";
//import Callback from "./Callback/Callback";
import Navbar from "./components/Navbar/Navbar";
import Park from "./components/Pages/Parks/parksHome";
import School from "./components/Pages/Schools/schoolsHome";
import Business from "./components/Pages/Businesses/businessHome"
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/parks" component={Park} />
      <Route path="/schools" component={School} />
      <Route path="/businesses" component={Business} />
    </div>
  </Router>
);

export default App;
