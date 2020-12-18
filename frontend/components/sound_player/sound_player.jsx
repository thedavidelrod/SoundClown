import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { formatSoundTime } from "../../util/sound_player_util";

export default class SoundPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      timeElapsed: 0,
      volume: 0.05,
      mutedVolume: 0.0,
      volumeHover: false,
    };

    this.handleMetadata = this.handleMetadata.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleTimeElapsed = this.handleTimeElapsed.bind(this);
    this.handleNextSound = this.handleNextSound.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleMute = this.handleMute.bind(this);
  }

  componentDidMount() {
    this.props.fetchSounds();
  }

  componentDidUpdate() {
    
    if (this.props.queue.length > 0) {
      return null;
    } else {
      this.props.receiveRandomSounds(this.props.sounds);
    }
  }

  handleMetadata() {
    const player = document.getElementById("audio");
    this.setState({ duration: player.duration });
  }

  handleTimeElapsed() {
    const player = document.getElementById("audio");
    const scroll = document.getElementById("scrollbar");

    if (!player.paused) {
      setInterval(() => {
        scroll.value = player.currentTime;
        this.setState({ elapsedTime: player.currentTime });
      }, 50);
    }
  }

  handleVolume(e) {
    const player = document.getElementById("audio");
    player.volume = e.target.value / 1000.0;
    this.setState({ volume: e.target.value / 1000.0 });
  }

  handleMute() {
    const player = document.getElementById("audio");
    const volumeBar = document.getElementById("volume");

    if (player.volume > 0) {
      this.setState({ volume: 0, mutedVolume: player.volume });
      player.volume = 0;
      volumeBar.value = 0;
    } else {
      this.setState({ volume: this.state.mutedVolume });
      player.volume = this.state.mutedVolume;
      volumeBar.value = this.state.mutedVolume * 1000.0;
    }
  }
  handleNextSound() {
    this.props.receivePreviousSound(this.props.currentSound);
    this.props.receiveNextSound(this.props.queue.shift());
    this.handlePlay();
    this.setState({ elapsedTime: 0 });
  }

  handleSkip(e) {
    const player = document.getElementById("audio");
    player.currentTime = e.target.value;
    this.setState({ elapsedTime: e.target.value });
  }

  handleNext() {
    const player = document.getElementById("audio");
    this.props.receivePreviousSound(this.props.currentSound.id);
    this.props.receiveCurrentSound(this.props.queue.shift());
    player.currentTime = 0;
    this.props.playSound();
    setTimeout(() => {
      player.play(), 100;
    });
    this.setState({ elapsedTime: 0 });
  }

  handleBack() {
    const player = document.getElementById("audio");
    if (player.currentTime < 6 && this.props.played.length > 0) {
      this.props.receiveNextSound(this.props.currentSound.id);
      this.props.receiveCurrentSound(this.props.played.pop());
      setTimeout(() => {
        player.play(), 100;
      });
      this.setState({ elapsedTime: 0 });
    } else {
      player.currentTime = 0;
      this.props.playSound();
      player.play();
      this.setState({ elapsedTime: 0 });
    }
  }

  handlePlay() {
    const player = document.getElementById("audio");
    if (this.props.playing) {
      this.props.pauseSound();
      player.pause();
    } else {
      this.props.playSound();
      player.play();
    }
  }

  render() {
     //handle the weird undefined issue again
    if (!this.props.sounds || !this.props.queue) {
      return null;
    }
    const { currentSound, playing } = this.props;
    let volumeIcon;
    let soundUrl;
    if (currentSound) {
      const player = document.getElementById("audio");
      soundUrl = currentSound.soundUrl;
      if (player.volume > 0.5) {
        volumeIcon = (
          <FontAwesomeIcon icon="volume-up" onClick={this.handleMute} />
        );
      } else if (player.volume < 5 && player.volume !== 0) {
        volumeIcon = <FontAwesomeIcon icon="volume-down" onClick={this.handleMute} />
      } else {
        volumeIcon = <FontAwesomeIcon icon="volume-mute" onClick={this.handleMute} />
      }
    };

    const soundPlayer = currentSound ? (
      <div className="player-parent">
        <div className="sound-player">
          <div className="player-buttons">
            <button className="player-back" onClick={this.handleBack}>
              <FontAwesomeIcon icon="step-backward" />
            </button>
            <button className="player-play" onClick={this.handlePlay}>
              {playing ? (
                <FontAwesomeIcon icon="pause" />
              ) : (
                <FontAwesomeIcon icon="play" />
              )}
            </button>
            <button className="player-next" onClick={this.handleNext}>
              <FontAwesomeIcon icon="step-forward" />
            </button>
          </div>

          <div className="timer-scroll">
            <p className="current-song-time">
              {formatSoundTime(this.state.elapsedTime)}
            </p>
            <input
              id="scroll-bar"
              className="scroll-bar"
              type="range"
              min="0"
              max={this.state.duration}
              onInput={this.handleSkip}
            />
            <p className="total-song-time">
              {formatSoundTime(this.state.duration)}
            </p>
          </div>

          <div
            className="volume"
            onMouseEnter={() => this.setState({ volumeHover: true })}
            onMouseLeave={() => this.setState({ volumeHover: false })}
          >
            <button>
              {this.state.volumeHover ? (
                <div
                  className="volume-slider"
                  onMouseEnter={() => this.setState({ volumeHover: true })}
                >
                  <input
                    type="range"
                    id="volume"
                    className="volume-slider-input"
                    min="0.0"
                    defaultValue={this.state.volume * 1000}
                    max="1000.0"
                    onChange={this.handleVolume}
                  />
                </div>
              ) : null}
              {volumeIcon}
            </button>
          </div>

          <div className="player-right">
            <Link className="player-art" to={`/sounds/${currentSound.id}`}>
              {currentSound.photoUrl ? (
                <img src={currentSound.photoUrl} />
              ) : null}
            </Link>
            <div className="player-title-artist">
              <Link className="player-title" to={`/sounds/${currentSound.id}`}>
                {currentSound.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : null;
    return (
  <div>
    <audio id="audio" 
    controls
    src={soundUrl}
    onLoadedMetadata={this.handleMetadata}
    onPlaying={this.handleTimeElapsed}
    onEnded={this.handleNextSound}
    />
    {soundPlayer}
  </div>

)
  }



} //!
