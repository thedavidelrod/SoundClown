import { connect } from "react-redux";
import SoundShow from './sound_show'
import {fetchSounds, fetchSound, deleteSound, updateSound} from '../../actions/sounds_actions'
import {withRouter} from 'react-router-dom'
const mSTP = (state, ownProps) => ({
  sound: state.entities.sounds[ownProps.match.params.id],
  errors: state.errors.sounds,
  user: state.session.id,
});

const mDTP = (dispatch) => ({
  fetchSounds: () => dispatch(fetchSounds()),
  fetchSound: (id) => dispatch(fetchSound(id)),
  deleteSound: (id) => dispatch(deleteSound(id)),
  updateSound: (sound, id) => dispatch(updateSound(sound, id)),
});

export default withRouter(connect(mSTP, mDTP)(SoundShow));
