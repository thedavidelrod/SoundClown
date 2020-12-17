import configureStore from "./store/store";
import Root from "./components/root";
import React from "react";
import ReactDOM from "react-dom";
import * as SessionActions from "./actions/session_actions";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faGoogle,
  faGithub,
  faLinkedin,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCaretLeft,
  faPlay,
  faUsers,
  faHeart,
  faVolumeUp,
  faPause,
  faStepBackward,
  faVolumeDown,
  faStepForward,
  faVolumeMute,
  faEllipsisH,
  faCamera,
  faUser,
  faExternalLinkAlt,
  faAngleDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faPlay,
  faPause,
  faHeart,
  faUsers,
  faStepForward,
  faStepBackward,
  faFacebook,
  faCamera,
  faVolumeUp,
  faVolumeDown,
  faVolumeMute,
  faExternalLinkAlt,
  faGoogle,
  faSoundcloud,
  faLinkedin,
  faGithub,
  faUser,
  faCaretLeft,
  faAngleDown,
  faSearch,
  faEllipsisH
);  


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
