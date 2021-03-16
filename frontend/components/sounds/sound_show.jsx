import React, { Component } from "react";
import PlayContainer from "../sound_player/play_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default class SoundShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorID: "",
      commentID: "",
      commentBody: "",
      liked: false,
    };

    this.deleteSound = this.deleteSound.bind(this);
      // this.editSound = this.editSound.bind(this);
    this.update = this.update.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.commentIndex = this.commentIndex.bind(this);
    this.allComments = this.allComments.bind(this);
    this.userLikesSounds = this.userLikesSounds.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    scrollTo(0, 0);
    this.props.fetchUserLikes();

    this.props.fetchSound(this.props.match.params.id);
    this.props.fetchComments();
  }
  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  userLikesSounds() {
    let soundIds = [];
    Object.values(this.props.userLikes).forEach((like) => {
      soundIds.push(like.sound_id);
    });
    return soundIds;
  }

  handleLike(soundId) {
    const { currentUser, userLikes } = this.props;
    if (!this.userLikesSounds().includes(soundId)) {
      let like = { user_id: currentUser.id, sound_id: soundId };
      this.props.createLike(like);
    } else {
      let likeId = null;
      Object.values(userLikes).forEach((like) => {
        if (like.sound_id === soundId) {
          likeId = like.id;
        }
      });
      this.props.deleteLike(likeId);
    }
  }

  deleteSound(id) {
    e.preventDefault();
    this.props.deleteSound(id);   
    this.props.history.push("/sounds");
  }

  // editSound(id) {
  //   this.props.history.push(`/sounds/${id}/edit/`);
  // }

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
    let filtered = comments.filter(
      (comment) => comment.sound_id === this.props.sound.id
    );
    let allComments = filtered.map((comment, i) => {
      return (
        <div
          key={i}
          className="comment-main"
          onMouseOver={() =>
            this.setState({
              authorID: comment.author_id,
              commentID: comment.id,
            })
          }
          onMouseLeave={() =>
            this.setState({ authorID: null, commentID: null })
          }
        >
          <div className="comment-photo-div">
            {" "}
            <Link to={`/users/${comment.author_id}`}>
              {this.props.comments[comment.id].photoUrl ? (
                <img
                  className="comment-photo"
                  src={this.props.comments[comment.id].photoUrl}
                />
              ) : (
                <div className="comment-photo comment-photo-empty">&nbsp;</div>
              )}
            </Link>
          </div>
          <div className="comment-content">
            <div className="comment-header">
              {this.props.currentUser.id === comment.author_id ? (
                "You"
              ) : (
                <Link
                  className="comment-other-author"
                  to={`/users/${comment.author_id}`}
                >
                  {this.props.comments[comment.id].username}
                </Link>
              )}
            </div>
            <div className="comment-body">
              <span className="comment-span">{comment.body}</span>
              {this.props.currentUser.id === this.state.authorID &&
              comments.id === this.state.commentID ? (
                <span className="delete-span">
                  <button
                    className="comment-delete-btn"
                    onClick={() => this.props.deleteComment(comment.id)}
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
    if (!this.props.sound || !this.props.users) {
      return null; //fixes weird undefined issue
    }
    // debugger

    let buttons;
    if (this.props.sound.uploader_id === this.props.user) {
      buttons = (
        <div className="ss-edit-buttons">
          <button className="ss-delete" onClick={() => this.props.deleteSound(this.props.sound.id)}>
            Delete
          </button>
          {/* <button className="ss-edit" onClick={() => this.editSound(this.props.sound.id)}>
            Edit
          </button> */}
        </div>
      );
    }

    return (
      <div className="ss-main">
        <div className="ss-banner">
          <PlayContainer soundId={this.props.sound.id} />

          <div className="ss-words">
            <div className="ss-words-top">
              <span className="ss-title">{this.props.sound.title}</span>
            </div>
            <div className="ss-words-bottom">
              <span className="ss-body">{this.props.sound.body}</span>
              <span className="ss-tag">{this.props.sound.tag}</span>
            </div>
          </div>
          <img src={this.props.sound.photoUrl} className="si-image" />
        </div>
        <div className="ss-buttons">
          {this.userLikesSounds().includes(this.props.sound.id) ? (
            <button
              className="profile-song-like liked"
              onClick={() => this.handleLike(this.props.sound.id)}
            >
              <FontAwesomeIcon className="like-icon" icon="heart" />
              Unlike
            </button>
          ) : (
            <button
              className="profile-song-like"
              onClick={() => this.handleLike(this.props.sound.id)}
            >
              <FontAwesomeIcon className="like-icon" icon="heart" />
              Like
            </button>
          )}
          {buttons}
        </div>
        {/* <div className="si-buttons">{buttons}</div> */}

        <div className="comment-form-parent">
          <div className="comment-form-wrapper">
            <form className="comment-form" onSubmit={this.handleComment}>
              <input
                type="text"
                value={this.state.commentBody}
                onChange={this.update("commentBody")}
                placeholder="Write a comment"
              />
              {/* < button>Submit a Comment</button> */}
            </form>
            {this.commentIndex()}
          </div>
        </div>
      </div>
    );
  }
}
