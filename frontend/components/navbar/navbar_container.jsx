import { connect } from "react-redux";
import Navbar from "./navbar";
import { logout } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";


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

export default connect(mSTP, mDTP)(Navbar)