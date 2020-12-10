import React, { Component } from "react";

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
     buttons = ( <div>
        <button className="sign-button" onClick={() => this.props.openModal("signup")}> Create Account</button>
        <button className="login-button" onClick={() => this.props.openModal("login")}>Sign In</button>
      </div>)
    }
    
    return( <div className="navbar">
      {buttons}
    </div>
    )
  }
}
