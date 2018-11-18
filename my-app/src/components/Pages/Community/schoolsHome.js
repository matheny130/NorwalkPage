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
            <Link to="/league">League St.</Link>
            <Link to="/maplehurst">Maplehurst</Link>
            <Link to="/high">High School</Link>
          <Route exact path="/league" component={League} />
          <Route exact path="/maplehurst" component={Maplehurst} />
          <Route exact path="/high" component={High} />
        </div>
    </Router>
    );
  }



}

export default Schools;