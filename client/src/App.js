import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Redux
import store from "./components/redux/store";

//Components
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

import { LOGOUT } from "./components/redux/actions/types";

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      // setAuthToken(localStorage.token);
    }
    // store.dispatch(loadUser());
    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
