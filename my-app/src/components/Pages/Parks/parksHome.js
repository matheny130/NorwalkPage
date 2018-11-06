import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./parks.css";
import Reservoir from "./reservoir.js";
import Ernsthausen from "./ernsthausen.js";
import Fair from "./fair.js";




class Park extends React.Component {




  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/reservoir">Reservoir</Link>
            </li>
            <li>
              <Link to="/ernsthausen">Rec Center</Link>
            </li>
            <li>
              <Link to="/fair">Fair Grounds</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/reservoir" component={Reservoir} />
          <Route exact path="/ernsthausen" component={Ernsthausen} />
          <Route exact path="/fair" component={Fair} />
        </div>
      </Router>
    );
  }



}

export default Park;