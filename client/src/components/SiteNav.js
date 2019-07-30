import React, { useState } from "react";
import { connect } from "react-redux";

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

import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import Logout from "./Logout";

function SiteNav(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      toggle();
    }
  };

  const loginRegisterSection = (
    <>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </>
  );

  const logoutSection = (
    <>
      <NavItem>
        <Logout />
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar expand="md" color="primary" dark fixed="top" id="navbarNav">
        <NavLink exact to="/" className="navbar-brand">
          MERN Starter
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                to="/guestbook"
                className="nav-link"
                onClick={handleLinkClick}
              >
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
          <hr className="d-block d-sm-none" />
          <Nav navbar>
            {props.isAuthenticated ? logoutSection : loginRegisterSection}
          </Nav>
        
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(SiteNav);
