import React, { Component } from "react";

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button className='sign-button' onClick={() => this.props.openModal("signup")}>
          Create Account
        </button>
        <button className='login-button' onClick={() => this.props.openModal("login")}>Sign In</button>
      </div>
    );
  }
}
