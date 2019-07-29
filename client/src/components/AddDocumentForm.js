import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { insertDocument } from "../redux/actions";

export default function AddDocumentForm() {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    title: "",
    body: ""
  });

  const handleClick = e => {
    e.preventDefault();
    dispatch(insertDocument(formValues));
    setFormValues({
      title: "",
      body: ""
    });
  };

  const handleChange = e => {
    switch (e.target.id) {
      case "title":
        setFormValues({
          title: e.target.value,
          body: formValues.body
        });
        break;
      case "body":
        setFormValues({
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
