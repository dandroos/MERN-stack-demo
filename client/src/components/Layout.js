import React from "react";
import Footer from "./Footer";
import Fade from "react-reveal";

export default function Layout(props) {
  return (
    <>
      <div className="page">
        {props.children}
        <Fade up>
          <Footer />
        </Fade>
      </div>
    </>
  );
}
