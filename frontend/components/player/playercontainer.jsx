import { connect } from "react-redux";
import Player from "./player";
import {
  setPlayPause,
  setSoundPlayer,
  seekPlayer,
  endCurrentSound,
} from "../../actions/player_actions";
import { receiveSound } from "../../actions/sounds_actions";



const mapStateToProps = (state, ownProps) => ({
  currentSound: state.entities.sounds[state.player.soundId],
  playing: state.player.playing,
  soundId: state.player.soundId,
  seek: state.sound.seek,
  player: state.sound.player,
  soundplayer: state.sound,
});

const mapDispatchToProps = (dispatch) => ({
  setPlayPause: (boolean, soundId, progress) =>
    dispatch(setPlayPause(boolean, soundId, progress)),
  receiveSound: (id) => dispatch(receiveSound(id)),
  setSoundPlayer: (soundplayer) => dispatch(setSoundPlayer(soundplayer)),
  seekPlayer: (progress) => dispatch(seekPlayer(progress)),
  endCurrentSound: (id) => dispatch(endCurrentSound(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);


