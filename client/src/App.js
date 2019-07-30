import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { loadUser } from "./redux/authActions";

import Welcome from "./pages/Welcome";
import Guestbook from "./pages/Guestbook";

import SiteNav from './components/SiteNav'

function App() {
  useEffect(() => store.dispatch(loadUser()), []);

  return (
    <Provider store={store}>
      <SiteNav />
      <Route
        render={props => {
          return (
            <div>
              <TransitionGroup>
                <CSSTransition
                  key={props.location.key}
                  timeout={450}
                  classNames="fade"
                  onEntering={() => window.scrollTo(0, 0)}
                >
                  <Switch location={props.location}>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/guestbook" component={Guestbook} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          );
        }}
        onUpdate={() => window.scrollTo(0, 0)}
      />
    </Provider>
  );
}

export default App;
