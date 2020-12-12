import configureStore from "./store/store";
import Root from "./components/root";
import React from "react";
import ReactDOM from "react-dom";
import * as SessionActions from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  //*testing stuff
  window.login = SessionActions.login;
  window.logout = SessionActions.logout;
  window.signup = SessionActions.signup;
  //*end test stuff

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
});
