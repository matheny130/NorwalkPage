import React from "react";
//import history from "../../history";
import { Navbar, NavbarBrand, Nav, NavLink, Row, Col } from 'reactstrap';
import './Navbar.css'

class NavExample extends React.Component {




  render() {
    return (

      <div id="nav">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="text-center"><p>City of Norwalk</p></NavbarBrand>


          <Nav navbar>
            <Row>
              <Col>
                <NavLink href="/parks">
                  Parks
                </NavLink>
              </Col>
              <Col>
                <NavLink href="/schools">
                  Schools
                </NavLink>
              </Col>
              <Col>
                <NavLink href="/businesses">
                  Businesses
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