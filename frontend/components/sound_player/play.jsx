import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Play extends Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay() {
        const player = document.getElementById("audio");
      if (this.props.playing && this.props.currentSound.id === this.props.soundId) {
          this.props.pauseSound()
          player.pause();
      } else {
          this.props.receiveCurrentSound(this.props.soundId)
          this.props.receivePreviousSound(this.props.soundId)
        this.props.playSound();
        player.setAttribute('autoplay', "");

        setTimeout(() => {player.play(), 100})
      }
        console.log(this.props.playing);

  }

  render() {
    return (
      
        <button className="play-button" onClick={this.handlePlay}>
          {this.props.playing && this.props.currentSound.id === this.props.soundId ? 
            <FontAwesomeIcon icon="pause" />
           : 
            <FontAwesomeIcon icon="play" />
          }
        </button>
   
    );
  }
}

