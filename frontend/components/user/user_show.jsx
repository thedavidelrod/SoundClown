import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlayContainer from "../sound_player/play_container";

export default class UserShow extends Component {
  constructor(props) {
    super(props);
  }

//   componentDidMount(e) {
//       e.preventDefault()
//       this.props.fetchUserSounds(this.props.match.params.id);
//       this.props.fetchUser(this.props.match.params.id);
//   }

//   componentDidUpdate(prevProps) {
//       if (this.props.location.pathname !== prevProps.location.pathname) {
//           this.props.fetchUserSounds(this.props.match.params.id)
//           this.props.fetchUser(this.props.match.params.id)
//       }
//   }

//   soundList() {
//     const soundListFilter = Object.values(this.props.sounds).filter( sound => sound.uploader_id === this.props.user_id);
//     const soundList = soundListFilter.map((sound, i) => {
//         return(
//             <div key={i} className='profile-sound-item'>
//                 <div className='profile-sound-art'>
//                     <Link to={`/sound/${sound.id}`}>
//                     {   }
//                     </Link>
//                 </div>

//             </div>
//         )
//     }) 
//   }

  render() {
      debugger
    if (!this.props.user || !this.props.userSongs) {
      return null;
    }
    const { user, currentUser } = this.props;
    return <div>

    </div>;
  }
}
