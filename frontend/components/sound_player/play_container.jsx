import Play from "./play";
import {connect} from 'react-redux'

import {
  receiveCurrentSound,
  receivePreviousSound,
  playSound,
  pauseSound,
} from '../../actions/sound_player_actions';


const mSTP = (state) => ({
  currentSound: state.entities.sounds[state.ui.soundPlayer.currentSoundId],
  playing: state.ui.soundPlayer.playing,
});

const mDTP = (dispatch) => ({
  playSound: () => dispatch(playSound()),
  pauseSound: () => dispatch(pauseSound()),
  receiveCurrentSound: (soundId) => dispatch(receiveCurrentSound(soundId)),
  receivePreviousSound: (soundId) => dispatch(receivePreviousSound(soundId)),
});

export default connect(mSTP, mDTP)(Play)