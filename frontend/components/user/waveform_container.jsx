import Waveform from "./waveform";
import { connect } from "react-redux";

const mSTP = (state) => {
  return {
    playing: state.ui.soundPlayer.playing,
    currentSoundId: state.ui.soundPlayer.currentSoundId,
  };
};

export default connect(mSTP, null)(Waveform);
