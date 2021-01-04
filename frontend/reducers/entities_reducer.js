import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import SoundsReducer from "./sounds_reducer";
import CommentsReducer from "./comments_reducer";

const EntitiesReducer = combineReducers({
  users: UserReducer,
  sounds: SoundsReducer,
  soundComments: CommentsReducer
});

export default EntitiesReducer;
