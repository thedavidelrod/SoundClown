import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import SoundsReducer from "./sounds_reducer";

const EntitiesReducer = combineReducers({
  users: UserReducer,
  sounds: SoundsReducer
});

export default EntitiesReducer


