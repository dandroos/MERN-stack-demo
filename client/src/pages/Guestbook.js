import React from "react";
import AddDocumentForm from "../components/AddDocumentForm";
import Layout from "../components/Layout";
import Documents from "../components/Documents";

export default function Guestbook() {
  return (
    <Layout>
      <div>
        <h1 className="font-weight-bold display-3 text-center">Documents</h1>
        <p className="lead text-center">
          A starter guestbook <span className="font-weight-bold">MERN</span>{" "}
          stack app!
        </p>
        <AddDocumentForm />
        <Documents />
      </div>
    </Layout>
  );
}
