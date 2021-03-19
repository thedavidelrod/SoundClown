import Splash from "./splash";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { Link } from "react-router-dom";
import { login, signup } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
    sounds: state.entities.sounds,
    path: ownProps.location.pathname.slice(1),
    errors: {},
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitForm:
      ownProps.location.pathname.slice(1) === "login"
        ? openModal
        : (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal(modal)),
    fetchUsers: () => dispatch(fetchUsers()),
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
