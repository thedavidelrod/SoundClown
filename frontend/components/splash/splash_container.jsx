import Splash from "./splash";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  return { user: state.entities.users[state.session.id] };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
