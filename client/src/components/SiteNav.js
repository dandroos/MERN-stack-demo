import React, { useState } from "react";

import { NavLink } from "react-router-dom";
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "jquery";
import "popper.js";

export default function SiteNav(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar expand="md" color="primary" dark fixed="top" id="navbarNav">
        <NavLink exact to="/" className="navbar-brand">
          MERN Starter
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/guestbook" className="nav-link" onClick={toggle}>
                Guestbook
              </NavLink>
            </NavItem>
            {/* <NavItem>
                <AniLink fade to="/second-page" className="nav-link" duration={animationDuration}>
                  Second page
                </AniLink>
              </NavItem>
              <NavItem>
                <AniLink fade to="/articles" className="nav-link" duration={animationDuration}>
                  Articles
                </AniLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
