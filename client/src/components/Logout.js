import React from "react";
import { connect } from "react-redux";
import { logout } from "../redux/authActions";
import { NavLink } from "reactstrap";

function Logout(props) {
  return <NavLink onClick={props.logout} href="#">Logout</NavLink>;
}

export default connect(
  null,
  { logout }
)(Logout);
