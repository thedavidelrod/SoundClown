import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export default class SoundIndexItem extends Component {
  constructor(props) {
    super(props);
    this.deleteSound = this.deleteSound.bind(this);
    // this.updateSound = this.updateSound.bind(this)
  }

  deleteSound() {
    e.preventDefault;
    this.props.deleteSound(soundId);
  }

  

  render() {
    
    return (
      <div className="sound-index-item">
        <span className="si-sound-image">
          <Link to={`/sounds/${this.props.sound.id}`}>
            <img id="si-image" src={this.props.sound.photoUrl} />
          </Link>
          <audio src={this.props.sound.SoundUrl}></audio>
          <br />
          <span className="si-words">
            <span className="si-title">{this.props.sound.title}</span>
            <br />
            <span className="si-tag">{this.props.sound.tag}</span>
            <br />
            <span className="si-body">{this.props.sound.body}</span>
          </span>
        </span>
      </div>
    );
  }
}
