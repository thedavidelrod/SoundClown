import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ModalContainer from "./modal/modal_container";
import NavbarContainer from "./navbar/navbar_container";
import SplashContainer from "./splash/splash_container";
import SoundIndexContainer from "./sounds/sound_index_container";
import SoundFormContainer from "./sounds/sound_form_container";
import SoundShowContainer from "./sounds/sound_show_container";
import UserShowContainer from "./user/user_show_container";
import EditFormContainer from "./sounds/edit_form_container";
import SoundPlayerContainer from "./sound_player/sound_player_container";
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
  <div className="main">
    <ModalContainer />
    <Route path="/" component={NavbarContainer} />
    <AuthRoute path="/" component={SplashContainer} />

    <Switch>
      <ProtectedRoute path="/sounds" component={SoundIndexContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />

      <ProtectedRoute path="/sounds/new" component={SoundFormContainer} />
      <ProtectedRoute path="/sounds/:id/edit" component={EditFormContainer} />
      <ProtectedRoute path="/sounds/:id" component={SoundShowContainer} />
      <ProtectedRoute path="/users/:id" component={UserShowContainer} />
    </Switch>
    <SoundPlayerContainer />
  </div>
);
export default App;
