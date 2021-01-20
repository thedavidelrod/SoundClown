import React, { Component } from "react";
import PlayContainer from "../sound_player/play_container";
export default class SoundShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorID: "",
      commentID: "",
      commentBody: "",
    };

    this.deleteSound = this.deleteSound.bind(this);
    this.editSound = this.editSound.bind(this);
    this.update = this.update.bind(this);
    this.handleComment = this.handleComment.bind(this);

  }

  componentDidMount() {
    this.props.fetchSound(this.props.match.params.id);
    this.props.fetchComments();

  }
  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  deleteSound(id) {
    e.preventDefault();
    this.props.deleteSound(id);
    this.props.history.push("/sounds");
  }

  editSound(id) {
    this.props.history.push(`/sounds/${id}/edit/`);
  }

  handleComment(e) {
    e.preventDefault();

    const comment = {
      sound_id: this.props.sound.id,
      author_id: this.props.user,
      body: this.state.commentBody,
    };
    this.setState({ comment: "" });
    this.props.createComment(comment);
  }
  
  render() {
    if (!this.props.sound) {
      return null; //fixes weird undefined issue
    }

    let buttons;

    if (this.props.sound.uploader_id === this.props.user) {
      buttons = (
        <div className="ss-edit-buttons">
          <button onClick={() => this.props.deleteSound(this.props.sound.id)}>
            Delete
          </button>
          <button onClick={() => this.editSound(this.props.sound.id)}>
            Edit
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
        <div className="comment-form-parent">
          <div className="comment-form-wrapper">
            <form className="comment-form" onSubmit={this.handleComment}>
              <input
                type="text"
                value={this.state.commentBody}
                onChange={this.update("commentBody")}
                placeholder="Write a comment"
              />
              <button>Submit a Comment</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
