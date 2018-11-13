import React, { Component } from "react";
//import history from "../../history";
import { Navbar, NavbarBrand, Nav, NavLink, Row, Col } from 'reactstrap';
import './jumbotron.css';
import CitySeal from "../../images/index.js"

class Jumbotron extends Component {




  render() {
    return (

      <div id="jumbotron">
        <p id="tron">The Maple City<a id="jumbo">Norwalk, OH</a></p>
      </div>
    );
  }



}

export default Jumbotron;