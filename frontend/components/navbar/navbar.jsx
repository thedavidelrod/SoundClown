import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.home = this.home.bind(this)
    this.stream = this.stream.bind(this)
  }
  
home() {
  this.props.history.push('/')
}

stream() {
  this.props.history.push('/sounds')
}

  render() {
    let buttons;

    if (this.props.user) {
      buttons = (
        <div className="loggedin-right">
          
            <Link to="/sounds/new" className="upload-button">
              Upload
            </Link>
          <button className="logout-button" onClick={this.props.logout}>
            Logout
          </button>
        </div>
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
          <div className="logo-left"> </div>
          <button className="home-button" onClick={this.home}> Home</button>
          <button className="stream-button" onClick={this.stream}>Stream</button>
          <button className="library-button">Library</button>
        </div>

        <div className="nav-right">{buttons}</div>
      </div> //! end div
    );
  }
}
