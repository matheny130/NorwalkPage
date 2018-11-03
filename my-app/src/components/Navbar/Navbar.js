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
                <NavLink>
                  Parks
                </NavLink>
              </Col>
              <Col>
                <NavLink>
                  Schools
                </NavLink>
              </Col>
              <Col>
                <NavLink>
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