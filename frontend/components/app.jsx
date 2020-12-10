import React from "react";
import SignUpFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import ModalContainer from "./modal/modal_container"
import SplashContainer from "./splash/splash_container";

const App = () => (
  <div>
    <ModalContainer />

    <h1>This is TimbreHaar </h1>
    <SplashContainer />
    <Switch>
      
    </Switch>
  </div>
);
export default App;
