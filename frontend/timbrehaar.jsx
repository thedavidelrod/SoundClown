import configureStore from "./store/store";
import Root from "./components/root";
import React from "react";
import ReactDOM from "react-dom";
import * as SessionActions from './actions/session_actions'
import * as Utils from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore()
ReactDOM.render(<Root store={store} />, root);


  //testing stuff 
  window.store = store
  window.actlogin = Utils.login
  window.actsignup = Utils.signup 
  window.actlogout = Utils.logout
  window.getState = store.getState;

  window.login = SessionActions.login 
  window.logout = SessionActions.logout
  window.signup = SessionActions.signup
  
});


