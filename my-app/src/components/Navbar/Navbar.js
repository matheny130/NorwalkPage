import React from "react";
//import history from "../../history";
import { Navbar, NavbarBrand, Nav, NavLink, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Navbar.css'

class NavExample extends React.Component {




  render() {
    return (

      <div id="nav">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="text-center"><p>City of Norwalk</p></NavbarBrand>


            <Nav navbar>
              <NavLink>
                Parks

               </NavLink>

            </Nav>

        </Navbar>
      </div>
    );
  }



}

export default NavExample;