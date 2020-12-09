import configureStore from "./store/store";
import Root from "./components/root";
import React from "react";
import ReactDOM from "react-dom";
import * as SessionActions from './actions/SessionAction'
import * as Actions from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore()
  window.actlogin = Actions.login
  window.actsignup = Actions.signup 
  window.actlogout = Actions.logout
  window.login = SessionActions.login 
  window.logout = SessionActions.logout
  window.signup = SessionActions.signup
  ReactDOM.render(<Root  store={store}/>, root);
});


