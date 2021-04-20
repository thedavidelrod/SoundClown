import React, { Component } from "react";
import PlayContainer from "../sound_player/play_container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class SoundIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseOnNew: null,
      mouseOnTrending: null,
      artists: null,  
    };
    this.trendingSounds = this.trendingSounds.bind(this);
    this.newestSounds = this.newestSounds.bind(this);
    this.mustListen = this.mustListen.bind(this); 
  }
  componentDidMount() {
    this.props.fetchSounds();
    this.props.fetchUsers();
    scrollTo(0, 0);
  }

  componentDidUpdate() {
    if (this.state.artists === null) {
      this.mustListen();
    }
  }

  mustListen() {
    const { users } = this.props;
    if (Object.values(users).length === 1) return null;

    const artists = Object.values(users);
    for (let i = 0; i < artists.length - 1; i++) {
      let ranNum = Math.floor(Math.random() * artists.length);
      [artists[i], artists[ranNum]] = [artists[ranNum], artists[i]];
    }
    const bestArtists = artists.map((artist, i) => {
      return (
        <div key={i} className="discover-must">
          <Link to={`/users/${artist.id}`}>
            <div className="must-img-wrapper">
              {artist.photoUrl ? (
                <img className="must-img" src={artist.photoUrl}></img>
              ) : null}
            </div>
            {artist.username}
          </Link>
        </div>
      );
    });

    this.setState({ artists: bestArtists });
  }

  newestSounds() {
    const { sounds } = this.props;
    const newestSounds = Object.values(sounds)
      .reverse()
      .map((sound, i) => {
        let soundArt = sound.photoUrl ? (
          <img className="song-art-img" src={sound.photoUrl} />
        ) : null;

        return (
          <div key={i} className="song-item">
            <li>
              <div
                className=" -art-div"
                onMouseEnter={() => this.setState({ mouseOnNew: sound.id })}
                onMouseLeave={() => this.setState({ mouseOnNew: null })}
              >
                <Link to={`/sounds/${sound.id}`}>{soundArt}</Link>
              </div>
              <div className="song-item-title">
                <Link
                  className="discover-title-link"
                  to={`/sounds/${sound.id}`}
                >
                  {sound.title}
                </Link>
              </div>
              {this.state.mouseOnNew === sound.id ? (
                <div
                  className="discover-play"
                  onMouseEnter={() => this.setState({ mouseOnNew: sound.id })}
                  onMouseLeave={() => this.setState({ mouseOnNew: null })}
                >
                  <PlayContainer soundId={sound.id} />
                </div>
              ) : null}
              <Link className="song-item-artist" to={`/users/${sound.uploader_id}`}>
                {sound.artist}
              </Link>
            </li>
          </div>
        );
      });
    return newestSounds;
  }

  trendingSounds() {
    const { sounds } = this.props;
    const trendingSounds = Object.values(sounds).map((sound, i) => {
      let soundArt = sound.photoUrl ? (
        <img className="song-art-img" src={sound.photoUrl} />
      ) : null;

      return (
        <div key={i} className="song-item">
          <li>
            <div
              className="song-art-div"
              onMouseEnter={() => this.setState({ mouseOnTrending: sound.id })}
              onMouseLeave={() => this.setState({ mouseOnTrending: null })}
            >
              <Link to={`/sounds/${sound.id}`}>{soundArt}</Link>
            </div>
            <div className="song-item-title">
              <Link className="discover-title-link" to={`/sounds/${sound.id}`}>
                {sound.title}
              </Link>
            </div>
            {this.state.mouseOnTrending === sound.id ? (
              <div
                className="discover-play"
                onMouseEnter={() => this.setState({ mouseOnTrending: sound.id })}
                onMouseLeave={() => this.setState({ mouseOnTrending: null })}
              >
                <PlayContainer soundId={sound.id} />
              </div>
            ) : null}
            <Link className="song-item-artist" to={`/users/${sound.uploader_id}`}>
              {sound.artist}
            </Link>
          </li>
        </div>
      );
    });
    return trendingSounds;
  }

  render() {
    return (
      <div className="discover-parent">
        <div className="discover-main">
          <div className="discover-list">
            <h1>TimbreHaar: New</h1>
            <p>Checkout the newest tracks on TimbreHaar</p>
            <div className="discover-new">
              <ul>{this.newestSounds()}</ul>
            </div>
          </div>
          <div className="discover-list">
            <h1>Trending Now</h1>
            <p>Top tracks on TimbreHaar</p>
            <div className="discover-trending">
              <ul>{this.trendingSounds()}</ul>
            </div>
          </div>
        </div>
        <div className="discover-side">
          <div className="discover-side-header">
            <FontAwesomeIcon icon="users" />
            <p>Meet Our Users</p>
          </div>
          <ul className="discover-side-ul">{this.state.artists}</ul>
        </div>
      </div>
    );
  }
}
