import React, {useState} from "react";
import AddDocumentForm from "../components/AddDocumentForm";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Layout from "../components/Layout";
import Documents from "../components/Documents";
import { connect } from "react-redux";

function Contact(props) {

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleChange = (e)=>{
    setFormValues({
      [e.target.name]: e.target.value
    })
  }

  return (
    <Layout>
      <div>
        <h1 className="font-weight-bold display-3 text-center">Contact</h1>
        <p className="lead text-center">
          Get in touch!
        </p>
        <Container className="mb-4">
      <Form className="border-bottom pb-4">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
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
        <Button color="primary">
          Send
        </Button>
      </Form>
    </Container>
      </div>
    </Layout>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
  };
};

export default connect(mapStateToProps)(Contact);
