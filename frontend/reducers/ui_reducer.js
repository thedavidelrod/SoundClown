import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import soundPlayerReducer from "./sound_player_reducer"

const uiReducer = combineReducers({
  modal: modalReducer,
  soundPlayer: soundPlayerReducer
});

export default uiReducer;