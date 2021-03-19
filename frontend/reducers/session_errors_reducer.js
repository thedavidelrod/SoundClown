import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
} from "../actions/session_actions";
import {
  RECEIVE_ERRORS,
  RECEIVE_ERROR,
  CLEAR_ERRORS,
} from "../actions/errors_actions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_ERROR:
      let currentState = state.slice();
      currentState.push(action.errors);
      return currentState;
    case RECEIVE_SESSION_ERRORS:
      let otherState = state.slice();
      otherState.push(action.errors);
      return otherState;

    case CLEAR_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
