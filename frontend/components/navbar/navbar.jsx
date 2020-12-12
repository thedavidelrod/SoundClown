import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let buttons;

    if (this.props.user) {
      buttons = (
        <button className="logout-button" onClick={this.props.logout}>
          logout
        </button>
      );
    } else {
      buttons = (
        <div className="login-buttons">
          <button
            className="login-button"
            onClick={() => this.props.openModal("login")}
          >
            Sign In
          </button>

          <button
            className="signup-button"
            onClick={() => this.props.openModal("signup")}
          >
            Create Account
          </button>
        </div>
      );
    }

    return (
      <div className="navbar">
        <div className="nav-left">
          <div className="logo-left"></div>
          <button className="home-button"> Home</button>
          <button className="stream-button">Stream</button>
          <button className="library-button">Library</button>
        </div>

        <div className="nav-right">{buttons}</div>
      </div> //! end div
    );
  }
}
