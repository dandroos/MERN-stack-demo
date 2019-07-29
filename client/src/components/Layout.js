import React from "react";
import SiteNav from "./SiteNav";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <ScrollToTop>
        <SiteNav />
        <div className="page">
          {props.children}
          <Footer />
        </div>
      </ScrollToTop>
    </div>
  );
}
