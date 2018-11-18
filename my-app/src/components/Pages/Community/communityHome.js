import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./community.css";
import Schools from "./schoolsHome.js";
import History from "./history.js";
import Hospital from "./hospital.js";






class Community extends React.Component {




  render() {
    return (
      <Router>
        <div class="community-page">
          <div class="row">
            <ul>
              <li id="community-link">
                <Link to="/schoolsHome">Schools</Link>
              </li>
              <li id="community-link">
                <Link to="/history">History</Link>
              </li>
              <li id="community-link">
                <Link to="/hospital">Hospital</Link>
              </li>
            </ul>
          </div>
          <Route exact path="/schoolsHome" component={Schools} />
          <Route exact path="/history" component={History} />
          <Route exact path="/hospital" component={Hospital} />
        </div>
      </Router>
    );
  }



}

export default Community;