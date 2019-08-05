import React from "react";
import AddDocumentForm from "../components/AddDocumentForm";
import Layout from "../components/Layout";
import Documents from "../components/Documents";
import { connect } from "react-redux";

function Guestbook(props) {
  return (
    <Layout>
      <h1 className="font-weight-bold display-4 text-center">Guestbook</h1>
      <p className="lead text-center">Let me know you were here!</p>
      {props.isAuthenticated ? (
        <AddDocumentForm />
      ) : (
        <div className="container">
          <p className="text-center border-bottom pb-4">
            Please register/login to post on my lovely guestbook!
          </p>
        </div>
      )}
      <Documents />
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Guestbook);
