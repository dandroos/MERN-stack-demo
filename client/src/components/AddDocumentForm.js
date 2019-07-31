import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Container } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { insertDocument } from "../redux/actions";

function AddDocumentForm(props) {
  const dispatch = useDispatch();
  console.log(props.user.name)
  const [formValues, setFormValues] = useState({
    title: "",
    body: "",
  });

  const handleClick = e => {
    e.preventDefault();
    dispatch(insertDocument({
      ...formValues,
      author: props.user.name
    }
      ));
    setFormValues({
      title: "",
      body: ""
    });
  };

  const handleChange = e => {
    switch (e.target.id) {
      case "title":
        setFormValues({
          ...formValues,
          title: e.target.value,
          body: formValues.body
        });
        break;
      case "body":
        setFormValues({
          ...formValues,
          title: formValues.title,
          body: e.target.value
        });
        break;
      default:
        break;
    }
  };

  return (
    <Container className="mb-4">
      <Form className="border-bottom pb-4">
        <FormGroup>
          <Label for="title">Headline</Label>
          <Input
            type="text"
            name="title"
            id="title"
            value={formValues.title}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="body">Message</Label>
          <Input
            type="textarea"
            name="body"
            id="body"
            value={formValues.body}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button color="primary" onClick={handleClick}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(AddDocumentForm);
