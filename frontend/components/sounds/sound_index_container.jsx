import { connect } from "react-redux";
import SoundIndex from "./sound_index";
import { fetchUsers } from "../../actions/user_actions";

import {
  fetchSounds,
  fetchSound,
  deleteSound,
  updateSound,
} from "../../actions/sounds_actions";

const mSTP = (state) => ({
  sounds: state.entities.sounds,
  errors: state.errors.sounds,
  user: state.session.id,
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id],

});

const mDTP = (dispatch) => ({
  fetchSounds: () => dispatch(fetchSounds()),
  fetchSound: (id) => dispatch(fetchSound(id)),
  deleteSound: (soundId) => dispatch(deleteSound(soundId)),
  updateSound: (sound, id) => dispatch(updateSound(sound, id)),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mSTP, mDTP)(SoundIndex);
