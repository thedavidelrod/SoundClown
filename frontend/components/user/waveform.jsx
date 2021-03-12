import React from "react";
import WaveSurfer from "wavesurfer.js";

class Waveform extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const scroll = document.getElementById("scrollbar");

    this.waveform.pause();
    this.waveform.seekTo(scroll.value / this.waveform.getDuration());
    this.waveform.play();
  }

  componentDidUpdate() {
    const player = document.getElementById("audio");
    const scroll = document.getElementById("scrollbar");
    if (scroll && this.props.currentSoundId === this.props.sound.id) {
      scroll.addEventListener("click", this.handleScroll);
    }

    if (scroll && this.props.currentSoundId !== this.props.sound.id) {
      scroll.removeEventListener("click", this.handleScroll);
    }

    if (
      this.props.playing &&
      this.props.currentSoundId === this.props.sound.id
    ) {
      this.waveform.play(player.currentTime);
    }

    if (
      (!this.props.playing &&
        this.props.currentSoundId === this.props.sound.id) ||
      (this.props.playing && this.props.currentSoundId !== this.props.sound.id)
    ) {
      this.waveform.pause();
    }
  }

  componentDidMount() {
    const player = document.getElementById("audio");

    this.waveform = WaveSurfer.create({
      barWidth: 3,
      cursorWidth: 1,
      container: "#waveform" + this.props.index,
      backend: "WebAudio",
      height: 80,
      progressColor: "#ff5500",
      fillParent: true,
      minPxPerSec: 1,
      xhr: {
        cache: "default",
        mode: "cors",
        method: "GET",
        credentials: "same-origin",
        redirect: "follow",
        referrer: "client",
        headers: [
          { key: "cache-control", value: "no-cache" },
          { key: "pragma", value: "no-cache" },
        ],
      },
    });
    this.waveform.load(this.props.sound.soundUrl);

    this.waveform.setVolume(0);

    this.waveform.on("loading", (integer) => {
      this.setState({ loading: integer });
    });

    this.waveform.on("ready", () => {
      if (
        this.props.playing &&
        this.props.currentSoundId === this.props.sound.id
      ) {
        this.waveform.play(player.currentTime);
      }
    });
    this.waveform.on("seek", (prog) => {
      player.currentTime = prog * this.waveform.getDuration();
    });
  }

  render() {
    return (
      <div>
        <h1 className={this.state.loading === 100 ? "hide" : ""}>
          Loading: {this.state.loading}
        </h1>
        <div id={`waveform${this.props.index}`} className="waveform"></div>
      </div>
    );
  }
}

export default Waveform;
