import React, { Component } from "react";
export default class SoundShow extends Component {
  constructor(props) {
    super(props);
    this.deleteSound = this.deleteSound.bind(this)
  }

  componentDidMount() {
    this.props.fetchSound(this.props.match.params.id);
  }

  deleteSound(id) {
    e.preventDefault();
    this.props.deleteSound(id);
  }

  

  render() {
    if (!this.props.sound) {
      return null; //fixes weird undefined issue
    }

    let buttons;

    if (this.props.sound.uploader_id === this.props.user) {
      buttons = (
        <button onClick={this.props.deleteSound(this.props.sound.id)}>
          Delete
        </button>
        );
    }

    return (
      <div className="ss-main">
        <div className="ss-info">
          <img src={this.props.sound.photoUrl} id="si-image" />
          {this.props.sound.title}
          <br />
          {this.props.sound.tag}
          <br />
          {this.props.sound.body}
          <audio>{this.props.sound.soundUrl}</audio>
          {buttons}
        </div>
      </div>
    );
  }
}
