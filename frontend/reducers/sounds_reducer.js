import {
  RECEIVE_SOUNDS,
  RECEIVE_SOUND,
  REMOVE_SOUND,
} from "../actions/sounds_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const SoundsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SOUNDS:
      return action.sounds;
    case RECEIVE_SOUND:
      newState = { [action.payload.sound.id]: action.payload.sound };
      return Object.assign({}, state, newState);
    case REMOVE_SOUND:
      delete newState[action.soundId];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default SoundsReducer;
