import React from "react";
//import history from "../../history";
import { Navbar, NavbarBrand, Nav, NavLink, Row, Col } from 'reactstrap';
import './Navbar.css';
import  "../Images/cityseal.jpg"

class NavExample extends React.Component {




  render() {
    return (

      <div id="nav">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="text-center"><img src="../Images/cityseal.jpg" alt=""></img></NavbarBrand>


          <Nav navbar>
            <Row>
              <Col>
                <NavLink href="/">
                  Home
                </NavLink>
              </Col>
              <Col>
                <NavLink href="/community">
                  Our Community
                </NavLink>
              </Col>
              <Col>
                <NavLink href="/parks">
                  Parks
                </NavLink>
              </Col>
              <Col>
                <NavLink href="/departments">
                  Departments
                </NavLink>
              </Col>
              <Col>
                <NavLink href="/econdev">
                  Economic Development
                </NavLink>
              </Col>
              <Col>
                <NavLink href="/contact">
                  Contact
                </NavLink>
              </Col>
            </Row>
          </Nav>

        </Navbar>
      </div>
    );
  }



}

export default NavExample;