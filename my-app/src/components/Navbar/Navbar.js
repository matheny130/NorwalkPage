import React, { Component } from "react";
//import history from "../../history";
import { Navbar, NavbarBrand, Nav, NavLink, Row, Col } from 'reactstrap';
import './Navbar.css';
import CitySeal from "../../images/index.js"

class NavExample extends Component {




  render() {
    return (

            <nav class="navbar navbar-default">
              <div class="container-fluid navbar-custom">
                <div class="row">
                  <div class="col-lg-4-xs-12 phone-nav" id="links">
                    <div class="col-lg-1-xs-4 phone-nav" id="link">
                      <a id="navbar-link" href="/">Home</a>
                    </div>
                    <div class="col-lg-1-xs-4 phone-nav" id="link">
                      <a id="navbar-link" href="/community">Community</a>
                    </div>
                    <div class="col-lg-1-xs-4 phone-nav" id="link">
                      <a id="navbar-link" href="/parks">Parks</a>
                    </div>
                    <div class="col-lg-1-xs-4 phone-nav" id="link">
                      <a id="navbar-link" href="/departments">Departments</a>
                    </div>
                    <div class="col-lg-1-xs-4 phone-nav" id="link">
                      <a id="navbar-link" href="/econdev">Economic Development</a>
                    </div>
                    <div class="col-lg-1-xs-4 phone-nav" id="link">
                      <a id="navbar-link" href="/contact">Contact</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>




    );
  }



}

export default NavExample;


