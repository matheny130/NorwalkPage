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
          <ul>
            <li>
              <Link to="/maplehurst">Maplehurst</Link>
            </li>
            <li>
              <Link to="/league">League</Link>
            </li>
            <li>
              <Link to="/high">High School</Link>
            </li>
          </ul>
          <Route exact path="/league" component={League} />
          <Route exact path="/maplehurst" component={Maplehurst} />
          <Route exact path="/high" component={High} />
        </div>
    </Router>
    );
  }



}

export default Schools;