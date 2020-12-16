import {connect} from 'react-redux'
import {
  fetchSounds,
  fetchSound,
  deleteSound,
  updateSound,
} from "../../actions/sounds_actions";
import SoundIndexItem from './sound_index'

const mSTP = (state) => ({
  user: state.session.id,
  sounds: state.entities.sounds,
  errors: state.errors.sounds,
});

const mDTP = (dispatch) => ({
  fetchSounds: () => dispatch(fetchSounds()),
  fetchSound: (id) => dispatch(fetchSound(id)),
  deleteSound: (soundId) => dispatch(deleteSound(soundId)),
  updateSound: (sound, id) => dispatch(updateSound(sound, id)),
});

export default connect(mSTP, mDTP)(SoundIndexItem)