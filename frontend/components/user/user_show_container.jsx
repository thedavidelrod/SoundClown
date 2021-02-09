import { connect } from "react-redux";
import UserShow from "./user_show";
import {
  fetchSounds,
  fetchSound,
  deleteSound,
  updateSound,
  receiveSound,
  receiveSounds,
  fetchUserSounds,
} from "../../actions/sounds_actions";
import { updateUser, fetchUser } from "../../actions/user_actions";

const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.id],
  sounds: state.entities.sounds,
  currentUser: state.entities.users[state.session.currentUser],
});

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  receiveError: (error) => dispatch(receiveError(error)),
  clearErrors: () => dispatch(clearErrors()),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
  fetchSound: (id) => dispatch(fetchSound(id)),
  fetchSounds: () => dispatch(fetchSounds()),
  deleteSound: (id) => dispatch(deleteSound(id)),
  updateSound: (sound, id) => dispatch(updateSound(sound, id)),
  receiveSound: (sound) => dispatch(receiveSound(sound)),
  receiveSounds: () => dispatch(receiveSounds()),
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchUserSounds: (userId) => dispatch(fetchUserSounds(userId)),
  updateUser: (userData, id) => dispatch(updateUser(userData, id)),
});

export default connect(mSTP, mDTP)(UserShow);
