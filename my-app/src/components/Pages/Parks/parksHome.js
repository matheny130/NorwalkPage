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
        <div className="parks-page">
          <div id="parks-links">
            <ul>
              <li id="parks-link">
                <Link style={{ textDecoration: "none", color: "white", fontFamily: "Lora" }} to="/reservoir">Reservoir</Link>
              </li>
              <li id="parks-link">
                <Link style={{ textDecoration: "none", color: "white", fontFamily: "Lora" }} to="/ernsthausen">Rec Center</Link>
              </li>
              <li id="parks-link">
                <Link style={{ textDecoration: "none", color: "white", fontFamily: "Lora" }} to="/fair">Fair Grounds</Link>
              </li>
            </ul>
          </div>


            <Route exact path="/reservoir" component={Reservoir} />
            <Route exact path="/ernsthausen" component={Ernsthausen} />
            <Route exact path="/fair" component={Fair} />
        </div>
      </Router>
    );
  }



}

export default Park;