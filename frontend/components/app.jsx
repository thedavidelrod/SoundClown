import React from "react";
import { Route, Switch } from "react-router-dom";
import ModalContainer from "./modal/modal_container";
import SplashContainer from "./splash/splash_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavbarContainer from "./navbar/navbar_container";
import SoundIndexContainer from "./sounds/sound_index_container"
const App = () => (
  <div className="main">
    <ModalContainer />
    <Route path="/" component={NavbarContainer} />
      
    <Switch>
      <Route path="/sounds" component={SoundIndexContainer} />
      <AuthRoute path="/" component={SplashContainer} />
    </Switch>
  </div>
);
export default App;
