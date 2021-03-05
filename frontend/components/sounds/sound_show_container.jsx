import { connect } from "react-redux";
import SoundShow from './sound_show'
import {fetchSounds, fetchSound, deleteSound, updateSound} from '../../actions/sounds_actions'
import {withRouter} from 'react-router-dom'
import {
  fetchComments,
  createComment,  
  deleteComment,
} from "../../actions/comment_actions";
import { fetchUsers } from "../../actions/user_actions";
import { createLike, fetchUserLikes, deleteLike } from "../../actions/like_actions";


const mSTP = (state, ownProps) => ({
  sound: state.entities.sounds[ownProps.match.params.id],
  errors: state.errors.sounds,
  user: state.session.id,
  users: state.entities.users,
  comments: state.entities.comments,
  currentUser: state.entities.users[state.session.id],
  userLikes: state.entities.userLikes
});   

const mDTP = (dispatch) => ({
  fetchSounds: () => dispatch(fetchSounds()),
  fetchSound: (id) => dispatch(fetchSound(id)),
  deleteSound: (id) => dispatch(deleteSound(id)),
  updateSound: (sound, id) => dispatch(updateSound(sound, id)),
  fetchComments: () => dispatch(fetchComments()),
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUserLikes: (userId) => dispatch(fetchUserLikes(userId)),
  deleteLike: (likeId) => dispatch(deleteLike(likeId)),
  createLike: (like) => dispatch(createLike(like)),
});

export default withRouter(connect(mSTP, mDTP)(SoundShow));
