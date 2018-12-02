import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
//import NavTabs from "./components/NavTabs";
//import Callback from "./Callback/Callback";
import Jumbotron from "./components/Jumbotron/jumbotron"
import Navbar from "./components/Navbar/Navbar";
import Park from "./components/Pages/Parks/parksHome";
import Community from "./components/Pages/Community/communityHome";
import EconDev from "./components/Pages/EconDev/econDevHome";
import Contact from "./components/Pages/Contact/contactHome";
import Department from "./components/Pages/Departments/departmentHome"

import './App.css';

const App = () => (
  <Router>
    <div>
      <Jumbotron />
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/parks" component={Park} />
      <Route path="/community" component={Community} />
      <Route path="/econDev" component={EconDev} />
      <Route path="/contact" component={Contact} />
      <Route path="/departments" component={Department} />
    </div>
  </Router>
);

export default App;
