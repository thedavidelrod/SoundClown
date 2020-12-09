import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/SessionAction";

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = ({}, action);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;

    default:
      return state;
  }
};

export default sessionReducer;
