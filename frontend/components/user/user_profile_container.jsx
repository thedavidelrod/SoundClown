import { connect } from "react-redux";

import UserProfile from './user_profile'

const mSTP = (state) => ({

})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  receiveError: (error) => dispatch(receiveError(error)),
  clearErrors: () => dispatch(clearErrors()),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
});

export default connect(mSTP, mDTP)(UserProfile)