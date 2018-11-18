import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./community.css";
import  Schools  from "./schoolsHome.js";





class Community extends React.Component {




  render() {
    return (
      <Router>
        <div class="page">
          <div class="row">
            <div class="col-lg-4-xs-12 phone-nav" id="links">
              <div class="col-lg-1-xs-4 phone-nav" id="community-link">
                <a id="page-link" href="/">Home</a>
              </div>
              <Link to="/schoolsHome">Schools</Link>

              <div class="col-lg-1-xs-4 phone-nav" id="community-link">
                <a id="page-link" href="/schools/league">Hospital</a>
              </div>
              <div class="col-lg-1-xs-4 phone-nav" id="community-link">
                <a id="page-link" href="/schools/highSchool">History</a>
              </div>

            </div>
          </div>
          <Route exact path="/schoolsHome" component={Schools} />
        </div>
      </Router>
    );
  }



}

export default Community;