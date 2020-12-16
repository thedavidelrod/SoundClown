import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ModalContainer from "./modal/modal_container";
import NavbarContainer from "./navbar/navbar_container";
import SplashContainer from "./splash/splash_container";
import SoundIndexContainer from "./sounds/sound_index_container";
import SoundFormContainer from "./sounds/sound_form_container";
import SoundShowContainer from "./sounds/sound_show_container"
import UserShowContainer from "./user/user_show_container"

const App = () => (
  <div className="main">
    <ModalContainer />
    <Route path="/" component={NavbarContainer} />
    <Switch>
      <Route path="/users/:id" component={UserShowContainer} /> 
      <Route path="/sounds/new" component={SoundFormContainer} />
      <Route path="/sounds/:id" component={SoundShowContainer} />
      <Route path="/sounds" component={SoundIndexContainer} />
      <AuthRoute path="/" component={SplashContainer} />
    </Switch>

  </div>
);
export default App;
