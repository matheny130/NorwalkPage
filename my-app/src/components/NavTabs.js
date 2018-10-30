import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/park"
        className={
          window.location.pathname === "/park" ? "nav-link active" : "nav-link"
        }
      >
        Park
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/school"
        className={
          window.location.pathname === "/school" ? "nav-link active" : "nav-link"
        }
      >
        School
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/business"
        className={
          window.location.pathname === "/business" ? "nav-link active" : "nav-link"
        }
      >
        Business
      </Link>
    </li>
  </ul>
);

export default NavTabs;