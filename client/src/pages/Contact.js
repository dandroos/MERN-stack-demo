import React, { useState, useEffect } from "react";
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
import { useDispatch, connect } from "react-redux";
import { sendMail, resetForm } from "../redux/mailActions";

function Contact(props) {
  const dispatch = useDispatch();

  const defFormVals = {
    name: "",
    email: "",
    message: ""
  };

  const [formValues, setFormValues] = useState({
    ...defFormVals
  });

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendMail(formValues));
  };

  useEffect(() => {
    if (props.isAuthenticated) {
      setFormValues({
        ...formValues,
        name: props.user.name,
        email: props.user.email
      });
    }
  }, [props.isAuthenticated, formValues, props.user]);

  useEffect(() => {
    if (props.isSent) {
      if (props.isAuthenticated) {
        setFormValues({
          ...defFormVals,
          name: props.user.name,
          email: props.user.email
        });
      } else {
        setFormValues({
          ...defFormVals
        });
      }
      setTimeout(() => {
        dispatch(resetForm());
      }, 5000);
    }
  }, [props.isSent, defFormVals, dispatch, props.user, props.isAuthenticated]);

  return (
    <Layout>
      <div>
        <h1 className="font-weight-bold display-3 text-center">Contact</h1>
        <p className="lead text-center">Get in touch!</p>
        <Container className="mb-4">
          <Form onSubmit={handleSubmit}>
            {props.error.id === "MAIL_NOT_SENT" ? (
              <Alert color="danger">{props.error.msg.msg}</Alert>
            ) : null}
            <Row>
              <Col sm>
                <FormGroup>
                  <Label for="name">Name</Label>
                  {props.isAuthenticated ? (
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      autoFocus
                      value={formValues.name}
                      onChange={handleChange}
                      required
                      disabled
                    />
                  ) : (
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      autoFocus
                      value={formValues.name}
                      onChange={handleChange}
                      required
                    />
                  )}
                </FormGroup>
              </Col>
              <Col sm>
                <FormGroup>
                  <Label for="email">Email</Label>
                  {props.isAuthenticated ? (
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                      disabled
                    />
                  ) : (
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formValues.email}
                      onChange={handleChange}
                      required
                    />
                  )}
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="body">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                value={formValues.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Row>
              <Col md={3}>
                <Button color="primary" block>
                  Send
                </Button>
              </Col>
              <Col md={9}>
                {props.isSending ? (
                  <Alert color="primary">
                    Sending your email. Please wait!
                  </Alert>
                ) : null}
                {props.isSent ? (
                  <Alert color="success">
                    Thank you. Your message has been sent successfully.
                  </Alert>
                ) : null}
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    isSending: state.mail.mailSending,
    isSent: state.mail.mailSent,
    error: state.error
  };
};

export default connect(mapStateToProps)(Contact);
