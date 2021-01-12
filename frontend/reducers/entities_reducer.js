import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import SoundsReducer from "./sounds_reducer";
import CommentsReducer from "./comment_reducer";

const EntitiesReducer = combineReducers({
  users: UserReducer,
  sounds: SoundsReducer,
  comments: CommentsReducer
});

export default EntitiesReducer;
