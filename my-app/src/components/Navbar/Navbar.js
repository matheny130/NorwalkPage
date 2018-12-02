import React, { Component } from "react";
//import history from "../../history";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Community from "../Pages/Community/communityHome.js"
import Park from "../Pages/Parks/parksHome.js"
import Business from "../Pages/EconDev/econDevHome.js"
import Home from "../Pages/Home.js"
import Contact from "../Pages/Contact/contactHome.js"
import Department from "../Pages/Departments/departmentHome.js"
//import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Row, Col } from 'reactstrap';
import './Navbar.css';
//import CitySeal from "../../images/index.js"
//import App from "./App.js"
class NavExample extends Component {

  render() {
    return (
      <Router>
        <div className="navbar">
          <div id="navbar-links">
            <ul>
              <li id="navbar-link">
                <Link style={{ textDecoration: "none", color: "white", fontFamily: "Playfair Display" }} to="/">Home</Link>
              </li>
              <li id="navbar-link">
                <Link style={{ textDecoration: "none", color: "white", fontFamily: "Playfair Display" }} to="/communityHome">Community</Link>
              </li>
              <li id="navbar-link">
                <Link style={{ textDecoration: "none", color: "white", fontFamily: "Playfair Display" }} to="/parksHome">Parks</Link>
              </li>
              <li id="navbar-link">
                <Link style={{ textDecoration: "none", color: "white", fontFamily: "Playfair Display" }} to="/departmentHome">Departments</Link>
              </li>
              <li id="navbar-link">
                <Link style={{ textDecoration: "none", color: "white", fontFamily: "Playfair Display" }} to="/econDevHome">Economic Development</Link>
              </li>
              <li id="navbar-link">
                <Link style={{ textDecoration: "none", color: "white", fontFamily: "Playfair Display" }} to="/contactHome">Contact Page</Link>
              </li>
            </ul>
          </div>
          <div class="navbar-link-content">
            <Route exact path="/" component={Home} />
            <Route exact path="/communityHome" component={Community} />
            <Route exact path="/parksHome" component={Park} />
            <Route exact path="/departmentsHome" component={Department} />
            <Route exact path="/econDevHome" component={Business} />
            <Route exact path="/contactHome" component={Contact} />
          </div>
        </div>

      </Router>

    );
  }



}


//  render() {
//    return (
//      <div id="nav">
//        <Navbar color="faded" light>
//          <NavbarBrand href="/" className="text-center"><p id="logo">QuizMe</p></NavbarBrand>
//            <Nav navbar>
//              <NavItem>

//                <NavLink href=""><p id="link">Home</p></NavLink>

//              </NavItem>
//              <NavItem>

//                <NavLink href="#"><p id="link">View Quizzes</p></NavLink>

//              </NavItem>
//              <NavItem>
//                <NavLink href="#"><p id="link">Create a Quiz</p></NavLink>
//              </NavItem>
//            </Nav>
//        </Navbar>
//      </div>
//    );
//  }



//}

export default NavExample;
           // <nav class="navbar navbar-default">
           //  <div class="container-fluid navbar-custom">
           //   <div class="row">
           //    <div class="col-lg-4-xs-12 phone-nav" id="links">
           //       <div class="col-lg-1-xs-4 phone-nav" id="link">
           //         <a id="navbar-link" href="/">Home</a>
           //       </div>
           //       <div class="col-lg-1-xs-4 phone-nav" id="link">
           //         <a id="navbar-link" href="/community">Community</a>
           //       </div>
           //       <div class="col-lg-1-xs-4 phone-nav" id="link">
           //         <a id="navbar-link" href="/parks">Parks</a>
           //       </div>
           //       <div class="col-lg-1-xs-4 phone-nav" id="link">
           //         <a id="navbar-link" href="/departments">Departments</a>
           //       </div>
           //       <div class="col-lg-1-xs-4 phone-nav" id="link">
           //         <a id="navbar-link" href="/econdev">Economic Development</a>
           //       </div>
           //       <div class="col-lg-1-xs-4 phone-nav" id="link1">
           //         <a id="navbar-link" href="/contact">Contact</a>
           //       </div>
           //     </div>
           //   </div>
           // </div>
           //</nav>




  //);
//}



//}

//export default NavExample;


