import React, { Component } from "react";

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.openModal("signup")}>
          Create Account
        </button>
        <button onClick={() => this.props.openModal("login")}>Sign In</button>
      </div>
    );
  }
}
