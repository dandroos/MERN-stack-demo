import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";

import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
    <BrowserRouter >
        <Route path="/" component={App} />
    </BrowserRouter>, document.getElementById("root"));
