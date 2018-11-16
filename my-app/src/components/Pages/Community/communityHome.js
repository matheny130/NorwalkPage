import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./schools.css";
import School from "./schoolsHome.js";





class Community extends React.Component {




  render() {
    return (
      <Router>
        <div id="page">
          <ul>
            <li>
              <Link to="/school">Schools</Link>
            </li>

          </ul>

          <hr />

          <Route exact path="/school" component={School} />

        </div>
      </Router>
    );
  }



}

export default Community;