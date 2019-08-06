import React from "react";
import AddDocumentForm from "../components/AddDocumentForm";
import Layout from "../components/Layout";
import Documents from "../components/Documents";
import { connect } from "react-redux";
import Book from "../static/svg/book.svg";
import Fade from "react-reveal";

function Guestbook(props) {
  return (
    <Layout>
      <Fade>
        <div style={{
          position: "fixed",
          zIndex: -5,
          // transform: "translate(-50%, -50%)",
          width: "100%",
        }}>
          <img
            src={Book}
            alt="Book"
            style={{
              opacity: 0.3,
              width: "100%",
              maxHeight: "80vh"
            }}
          />
        </div>
      </Fade>
      <Fade down>
        <h1 className="font-weight-bold display-4 text-center">Guestbook</h1>
        <p className="lead text-center">Let me know you were here!</p>
      </Fade>
      {props.isAuthenticated ? (
        <AddDocumentForm />
      ) : (
        <div className="container">
          <Fade>
            <p className="text-center pb-4">
              Please register/login to post on my lovely guestbook!
            </p>
          </Fade>
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
