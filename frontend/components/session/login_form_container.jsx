import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import LogInForm from './login_form'

import {
  receiveErrors,
  clearErrors,
} from "../../actions/errors_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
    //receiveError: (error) => dispatch(receiveError(error)),
    clearErrors: () => dispatch(clearErrors()),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
