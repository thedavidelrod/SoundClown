import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlayContainer from "../sound_player/play_container";

export default class UserShow extends Component {
  constructor(props) {
    super(props);
    this.soundList = this.soundList.bind(this);
    
  }

  componentDidMount(e) {
      // e.preventDefault()
      this.props.fetchUserSounds(this.props.match.params.id);
      this.props.fetchUser(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
          this.props.fetchUserSounds(this.props.match.params.id)
          this.props.fetchUser(this.props.match.params.id)
      }
  }

  soundList() {
    const soundListFilter = Object.values(this.props.sounds).filter( sound => sound.uploader_id === this.props.user_id);
    if (songArrFiltered.length === 0) {
         return (
           <h1 className="no-songs">You have no sounds. <Link className="no-songs-upload" to="/upload">Upload</Link> to add tracks to your page!</h1>
         )
       }



    const soundList = soundListFilter.map((sound, i) => {
        return (
          <div key={i} className="profile-sound-item">
            <div className="profile-sound-art">
              <Link to={`/sound/${sound.id}`}>
                {sound.soundPhoto ? (
                  <img className="profile-song-img" src={sound.soundPhoto} />
                ) : (
                  <div className="profile-song-img empty-profile">&nbsp;</div>
                )}
              </Link>
            </div>
            
          </div>
        );
    }) 
  }

  render() {
    if (!this.props.user || !this.props.userSounds) {
      return null;
    }
    return <div>
      {this.soundList()}
    </div>;
  }
}
