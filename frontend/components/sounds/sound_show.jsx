import React, { Component } from "react";
import PlayContainer from "../sound_player/play_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  allComments() {
    let comments = Object.values(this.props.comments);
    let filtered = comments.filter((comment) => comments.sound_id === this.props.sound.id
    );
    let allComments = filtered.map((comment, i) => {
      return (
        <div
          key={i}
          className="comment-main"
          onMouseOver={() =>
            this.setState({
              authorID: comments.author_id,
              commentID: comments.id,
            })
          }
          onMouseLeave={() =>
            this.setState({ authorID: null, commentID: null })
          }
        >
          <div className="comment-content">
            <div className="comment-header">
              {this.props.currentUser.id === this.props.comments.author_id ? (
                "You"
              ) : (
                <Link
                  className="comment-other-author"
                  to={`/users/${this.props.comments.author_id}`}
                >
                  {this.props.users[this.props.comments.author_id].email}
                </Link>
              )}
            </div>
            <div className="comment-body">
              <span className="comment-span">{comments.body}</span>
              {this.props.currentUser.id === this.state.authorID &&
              comments.id === this.state.commentID ? (
                <span className="delete-span">
                  <button
                    className="comment-delete-btn"
                    onClick={() => this.props.deleteComment(comments.id)}
                  >
                    <FontAwesomeIcon icon="dumpster-fire" />
                  </button>
                </span>
              ) : null}
            </div>
          </div>
        </div>
      );  
    });
    return allComments;
  }

  commentIndex() {
    const allComments = this.allComments();

    const index =
      Object.values(this.props.comments).length > 0 ? (
        <div className="comment-index-wrapper">
          <div className="comment-index-header">
            <FontAwesomeIcon icon="comment" />
            &nbsp;
            {allComments.length}&nbsp;
            {allComments.length === 1 ? "comment" : "comments"}
          </div>
          <div className="comment-list">{allComments}</div>
        </div>
      ) : null;

    return index;
  }

  render() {
    if (!this.props.sound) {
      return null; //fixes weird undefined issue
    }
    // debugger;
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
            {this.commentIndex()}
          </div>
        </div>
      </div>
    );
  }
}
