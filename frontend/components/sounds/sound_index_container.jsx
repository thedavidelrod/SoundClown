import { connect } from "react-redux";
import SoundIndex from "./sound_index";
import {
  fetchSounds,
  fetchSound,
  deleteSound,
  updateSound
} from "../../actions/sounds_actions";

const mSTP = (state, ownProps) => ({
  sounds: state.entities.sounds,
  errors: state.errors.sounds,
  user: state.session.id,
});


const mDTP = (dispatch) => ({
    fetchSounds: () => dispatch(fetchSounds()),
    fetchSound: (id) => dispatch(fetchSound(id)),
    deleteSound: (soundId) => dispatch(deleteSound(soundId)),
    updateSound: (sound, id) => dispatch((updateSound(sound, id)))


})

export default connect(mSTP, mDTP)(SoundIndex)