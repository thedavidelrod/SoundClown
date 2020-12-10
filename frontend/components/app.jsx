import React from "react";
import { Route, Switch } from "react-router-dom";
import ModalContainer from "./modal/modal_container";
import SplashContainer from "./splash/splash_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
import UserProfileContainer from "./user/user_profile_container";

const App = () => (
  <div className="main">
    <ModalContainer />

    <h1>This is TimbreHaar </h1>
    <Route path="/" component={NavbarContainer} />
    <Switch>
      <Route exact path="/home" component={SplashContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
    </Switch>
  </div>
);
export default App;
