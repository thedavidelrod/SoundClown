import { connect } from "react-redux";
import {
  fetchSounds,
  fetchSound,
  fetchUserSounds,
} from "../../actions/sounds_actions";
import Searchbar from "./searchbar";

import { fetchUser, fetchUsers } from "../../actions/user_actions";

const mSTP = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.id],
  users: state.entities.users,
  sound: state.entities.sounds[ownProps.match.params.id],
  sounds: state.entities.sounds,
  currentUser: state.entities.users[state.session.id],

});

const mDTP = (dispatch) => ({
  fetchSound: (id) => dispatch(fetchSound(id)),
  fetchSounds: () => dispatch(fetchSounds()),
  fetchUser: (user) => dispatch(fetchUser(user)),
  fetchUserSounds: (userId) => dispatch(fetchUserSounds(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mSTP, mDTP)(Searchbar);
