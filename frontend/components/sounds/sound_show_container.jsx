import { connect } from "react-redux";
import SoundShow from './sound_show'
import {receiveUser} from '../../actions/user_actions'
import {fetchSounds, fetchSound, deleteSound, updateSound} from '../../actions/sounds_actions'


const mSTP = (state, ownProps) => ({
  sound: state.entities.sounds[ownProps.match.params.id],
  errors: state.errors.sounds,
  user: state.session.id,
});

const mDTP = (dispatch) => ({
  fetchUser: (user) => dispatch(receiveUser(user)),
  fetchSounds: () => dispatch(fetchSounds()),
  fetchSound: (id) => dispatch(fetchSound(id)),
  deleteSound: (id) => dispatch(deleteSound(id)),
  updateSound: (sound, id) => dispatch(updateSound(sound, id)),
});

export default connect(mSTP, mDTP)(SoundShow);
