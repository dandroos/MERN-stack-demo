import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { updateUser } from "../redux/authActions";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Row,
  Col
} from "reactstrap";
import Layout from "../components/Layout";

import { clearErrors } from "../redux/errorActions";

function Account(props) {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    name: "",
    email: ""
  });

  const [isAuthorised, setIsAuthorised] = useState(false);

  useEffect(() => {
    if (props.user) {
      setFormState({
        name: props.user.name,
        email: props.user.email
      });
    }
  }, [props.user]);

  useEffect(() => {
    setIsAuthorised(props.isAuthenticated);
  }, [props.isAuthenticated]);

  const handleChange = e =>
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });

  const handleSubmit = e => {
    e.preventDefault();
    props.clearErrors();
    dispatch(
      updateUser({
        ...formState,
        id: props.user.id
      })
    );
  };

  const AlertSection = () => (
    <>
      {props.isUpdating ? (
        <Alert color="secondary">We are updating your details</Alert>
      ) : null}
      {props.isUpdated ? (
        <Alert color="secondary">
          Thanks! We have successfully updated your details.
        </Alert>
      ) : null}
    </>
  );

  const ErrorSection = () =>(
    <>
    {props.error.id === 'USER_UPDATE_FAIL' ? (
      <Alert color="danger">{props.error.msg.msg}</Alert>
    ): null}
    </>
  )

  return (
    <Layout>
      <h1 className="font-weight-bold display-3 text-center">My Account</h1>
      <p className="lead text-center">Configure your options!</p>
      <Container>
        {isAuthorised ? (
          <Form onSubmit={handleSubmit}>
            <ErrorSection />
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button block>Update</Button>
            <AlertSection />
          </Form>
        ) : (
          <p className="text-center">
            Please log in to update your account details
          </p>
        )}
      </Container>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    isUpdating: state.auth.isUpdating,
    isUpdated: state.auth.isUpdated,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { clearErrors }
)(Account);
