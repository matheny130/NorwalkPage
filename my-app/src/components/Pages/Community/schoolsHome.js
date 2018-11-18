import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./schools.css";
import High from "./highSchool.js";
import Maplehurst from "./maplehurst.js";
import League from "./league.js";




class Schools extends React.Component {




  render() {
    return (
    <Router>
      <div class="page">
          <div class="row">
            <Link to={League}>League St.</Link>
            <div class="col-lg-4-xs-12 phone-nav" id="links">
              <div class="col-lg-1-xs-4 phone-nav" id="school-link">
                <a id="navbar-link" href="/">Home</a>
              </div>
              <div class="col-lg-1-xs-4 phone-nav" id="school-link">
                <a id="navbar-link" href="/maplehurst">Maplehurst</a>
              </div>
              <div class="col-lg-1-xs-4 phone-nav" id="school-link">
                <a id="navbar-link" href="/league">League Street School</a>
              </div>
              <div class="col-lg-1-xs-4 phone-nav" id="school-link">
                <a id="navbar-link" href="/highSchool">Norwalk High School</a>
              </div>

            </div>


        </div>
      </div>
    </Router>
    );
  }



}

export default Schools;