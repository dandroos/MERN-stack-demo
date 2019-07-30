import React from "react";
import { connect } from "react-redux";
import { logout } from "../redux/authActions";
import { Button } from "reactstrap";

function Logout(props) {
  return (
    <Button color="secondary" size="sm" onClick={props.logout} href="#">
      Logout
    </Button>
  );
}

export default connect(
  null,
  { logout }
)(Logout);
