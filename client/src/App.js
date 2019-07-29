import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Welcome from "./pages/Welcome";
import Guestbook from "./pages/Guestbook";

function App() {
  return (
    <Provider store={store}>
      <Route
        render={props => {
          return (
            <TransitionGroup>
              <CSSTransition
                key={props.location.key}
                timeout={450}
                classNames="fade"
              >
                <Switch location={props.location}>
                  <Route exact path="/" component={Welcome} />
                  <Route path="/guestbook" component={Guestbook} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
        onUpdate={() => window.scrollTo(0, 0)}
      />
    </Provider>
  );
}

export default App;
