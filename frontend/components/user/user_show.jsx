import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlayContainer from "../sound_player/play_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Waveform from "./waveform";
import WaveformContainer from "./waveform_container";

export default class UserShow extends Component {
  constructor(props) {
    super(props);
    this.soundList = this.soundList.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.userLikesSounds = this.userLikesSounds.bind(this);
  }

  componentDidMount(e) {
    this.props.fetchUserSounds(this.props.match.params.id);
    this.props.fetchUser(this.props.match.params.id);
    this.props.fetchUserLikes(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      scrollTo(0, 0);
      this.props.fetchUserSounds(this.props.match.params.id);
      this.props.fetchUser(this.props.match.params.id);
    }
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
  soundList() {
    const { sounds } = this.props;

    const soundListFilter = Object.values(sounds).filter(
      (sound) => sound.uploader_id === this.props.user.id
    );
    if (soundListFilter.length === 0) {
      return (
        <h1 className="no-songs">
          You have no sounds.{" "}
          <Link className="no-songs-upload" to="/sounds/new">
            Upload
          </Link>{" "}
          to add tracks to your page!
        </h1>
      );
    }

    const soundList = soundListFilter.map((sound, i) => {
      return (
        <div key={i} className="profile-song-item">
          <div className="profile-song-art">
            <Link to={`/sounds/${sound.id}`}>
              {sound.photoUrl ? (
                <img className="profile-song-img" src={sound.photoUrl} />
              ) : (
                <div className="profile-song-img empty-profile">&nbsp;</div>
              )}
            </Link>
          </div>
          <div className="profile-song-main">
            <div className="profile-song-header">
              <PlayContainer soundId={sound.id} />
              <div className="profile-song-info">
                <div className="profile-song-info-top">
                  <li>
                    <Link to={`/users/${sound.user_id}`}>
                      {/* <p className="profile-song-artist">{sound.artist}</p> */}
                    </Link>
                  </li>
                  {/* <li>{uploadTime(sound.created_at)}</li> */}
                </div>
                <div className="profile-song-info-bottom">
                  <li>
                    <Link to={`/sound/${sound.id}`}>{sound.title}</Link>{" "}
                  </li>
                  <li>{sound.tag}</li>
                </div>
              </div>
            </div>
            <WaveformContainer index={i} sound={sound} />
            <div className="profile-song-footer">
              {this.userLikesSounds().includes(sound.id) ? (
                <button
                  className="profile-song-like liked"
                  onClick={() => this.handleLike(sound.id)}
                >
                  <FontAwesomeIcon className="like-icon" icon="heart" />
                  Unlike
                </button>
              ) : (
                <button
                  className="profile-song-like"
                  onClick={() => this.handleLike(sound.id)}
                >
                  <FontAwesomeIcon className="like-icon" icon="heart" />
                  Like
                </button>
              )}
            </div>
          </div>
        </div>
        );
    });
    return soundList;
  }

  render() {
    if (!this.props.user || !this.props.sounds) {
      return null;
    }
    const { user } = this.props;
      //debugger
    return (
      <div>
        <div className="profile-main">
          <div className="profile-top">
            <div className="user-info">
              <div className="profile-pic-top-div">
                {user.photoUrl ? (
                  <img className="profile-pic-top" src={user.photoUrl} />
                ) : (
                  <div className="profile-pic-top">&nbsp;</div>
                )}
              </div>
              <li className="user-display-name">{user.username}</li>
            </div>
          </div>
          <div className="profile-song-content">
            <div className="profile-header">
              <li>All</li>
            </div>
            <div className="profile-song-bottom">
              <div className="profile-recent-songs">
                <div className="recent">Recent</div>
                <div className="recent-songs-list">
                  {this.soundList()}
                  <Link to={`/sounds/${this.props.sounds.id}`}>
                    {this.props.sounds.title}
                  </Link>{" "}
                </div>
              </div>
              <div className="profile-right-panel">
                <div className="profile-right-panel-content">
                  <div className="profile-stats">
                    <span className="tracks-span">
                      <h2>Tracks</h2>
                      <p>{user.sounds.length}</p>
                    </span>
                  </div>
                  <div className="profile-bio">
                    <span className="bio-span">{user.bio}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
