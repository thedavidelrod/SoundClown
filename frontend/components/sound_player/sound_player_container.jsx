import { connect } from "react-redux";
import SoundPlayer from "./sound_player";
import { fetchSounds } from "../../actions/sounds_actions";
import {
  receiveCurrentSound,
  receivePreviousSound,
  receiveNextSound,
  playSound,
  pauseSound,
  receiveRandomSounds,
} from "../../actions/sound_player_actions";

const mSTP = (state) => ({
  currentSound: state.entities.sounds[state.ui.soundPlayer.currentSoundId],
  sounds: state.entities.sounds,
  playing: state.ui.soundPlayer.playing,
  played: state.ui.soundPlayer.played,
  queue: state.ui.soundPlayer.queue
});

const mDTP = (dispatch) => ({
  fetchSounds: () => dispatch(fetchSounds()),
  receiveCurrentSound: (soundId) => dispatch(receiveCurrentSound(soundId)),
  receivePreviousSound: (soundId) => dispatch(receivePreviousSound(soundId)),
  receiveNextSound: (soundId) => dispatch(receiveNextSound(soundId)),
  playSound: () => dispatch(playSound()),
  pauseSound: () => dispatch(pauseSound()),
  receiveRandomSounds: (sounds) => dispatch(receiveRandomSounds(sounds)),
});

export default connect(mSTP, mDTP)(SoundPlayer);
