import { connect } from "react-redux";
import Navbar from "./navbar";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import {withRouter} from 'react-router-dom'

const mSTP = (state) => {
  return {
    user: state.entities.users[state.session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal(modal)),

  };
};

export default withRouter(connect(mSTP, mDTP)(Navbar))