import React from "react";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <div className="page">
        {props.children}
        <Footer />
      </div>
      {/* </ScrollToTop> */}
    </div>
  );
}
