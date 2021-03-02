import {
  RECEIVE_LIKES,
  DELETE_LIKE,
  RECEIVE_LIKE,
} from "../actions/like_actions";

const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  let likesArr = [];

  switch (action.type) {
    case RECEIVE_LIKES:
     
      return action.likes;
    case RECEIVE_LIKE:
      return Object.assign({}, oldState, { [action.like.id]: action.like });
    case DELETE_LIKE:
      let nextState = Object.assign({}, oldState);
      delete nextState[action.likeId];
      return nextState;
    default:
      return oldState;
  }
};

export default likesReducer;
