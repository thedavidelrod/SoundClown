import { combineReducers } from "redux";
import  playerReducer  from "./player_reducer";
import modalReducer from "./modal_reducer";


const uiReducer = combineReducers({
  modal: modalReducer,
  player: playerReducer
});

export default uiReducer;