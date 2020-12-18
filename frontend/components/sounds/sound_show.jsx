import React, { Component } from "react";
import PlayContainer from '../sound_player/play_container'
export default class SoundShow extends Component {
  constructor(props) {
    super(props);
    this.deleteSound = this.deleteSound.bind(this);
    this.editSound = this.editSound.bind(this);
  }

  componentDidMount() {
    this.props.fetchSound(this.props.match.params.id);
  }

  deleteSound(id) {
    e.preventDefault();
    this.props.deleteSound(id);
  }

  editSound(id) {
    
    this.props.history.push(`/sounds/${id}/edit/`);
  }

  render() {
    if (!this.props.sound) {
      return null; //fixes weird undefined issue
    }

    let buttons;

    if (this.props.sound.uploader_id === this.props.user) {
      buttons = (
        <div className='ss-edit-buttons'>
          <button onClick={() => this.props.deleteSound(this.props.sound.id)}>
            Delete
          </button>
          <button onClick={() => this.editSound(this.props.sound.id)}>Edit
          </button>
        </div>
      );
    }

    return (
      <div className="ss-main">
        <div className="ss-banner">
          <br />
          <PlayContainer soundId={this.props.sound.id} />

          <span className="ss-title">{this.props.sound.title}</span>
          <br />

          <span className="ss-tag">{this.props.sound.tag}</span>
          <br />
          <span className="ss-body">{this.props.sound.body}</span>

            <div className="si-buttons">{buttons}</div>
          <img src={this.props.sound.photoUrl} className="si-image" />
        </div>
      </div>
    );
  }
}
