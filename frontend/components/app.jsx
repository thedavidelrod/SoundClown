import React from "react";
import { Route, Switch } from "react-router-dom";
import ModalContainer from "./modal/modal_container";
import SplashContainer from "./splash/splash_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
import UserProfileContainer from "./user/user_profile_container";

const App = () => (
  <div className="main">
    {/* <ModalContainer /> */}
    <SplashContainer />
    <Route path="/" component={NavbarContainer} />
    <Switch>
      <AuthRoute path="/" component={ModalContainer} />
      <ProtectedRoute exact path="/home" component={UserProfileContainer} />
    </Switch>
  </div>
);
export default App;
