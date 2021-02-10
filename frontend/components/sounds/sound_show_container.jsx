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


const mSTP = (state, ownProps) => ({
  sound: state.entities.sounds[ownProps.match.params.id],
  errors: state.errors.sounds,
  user: state.session.id,
  users: state.entities.users,
  comments: state.entities.comments,
  currentUser: state.entities.users[state.session.id],

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
});

export default withRouter(connect(mSTP, mDTP)(SoundShow));
