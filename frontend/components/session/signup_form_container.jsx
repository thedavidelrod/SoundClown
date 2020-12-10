import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import {closeModal} from "../../actions/modal_actions"

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup",
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    receiveError: (error) => dispatch(receiveError(error)),
    clearErrors: () => dispatch(clearErrors()),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
  };  


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
