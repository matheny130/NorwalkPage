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
        <div className="community-page">
          <div id="community-links">
            <ul>
              <li id="community-link">
                <Link style={{ textDecoration: "none", color: "white", fontFamily: "Lora" }} to="/schoolsHome">Schools</Link>
              </li>
              <li id="community-link">
                <Link style={{ textDecoration: "none", color: "white", fontFamily: "Lora" }} to="/history">History</Link>
              </li>
              <li id="community-link">
                <Link style={{ textDecoration: "none", color: "white", fontFamily: "Lora" }} to="/hospital">Hospital</Link>
              </li>
            </ul>
          </div>
          <div class="community-link-content">
            <Route exact path="/schoolsHome" component={Schools} />
            <Route exact path="/history" component={History} />
            <Route exact path="/hospital" component={Hospital} />
          </div>
        </div>

      </Router>

    );
  }



}

export default Community;