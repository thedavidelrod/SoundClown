import React, { Component } from "react";
import { Link } from 'react-router-dom'
export default class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.demoLogin = this.demoLogin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  demoLogin(e) {
    e.preventDefault();
    const user = { email: "test@user.com", password: "testuser" };
    this.props.login(user).then(() => this.props.closeModal());
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />

          <h1 className="log-in">Log In</h1>
          <div className="login-form">
            <br />

            <input
              placeholder="Your email address"
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              className="login-input"
            />

            <br />

            <input
              placeholder="Your password"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input"
            />
            <br />

            <br />
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}

            />
            
            <button className="demo-log" onClick={this.demoLogin}>
              Demo Login
            </button>
            <br />
            {this.renderErrors()}
            <span className="fine-print">
              <p>
                We may use your email and devices for updates and tips on
                Timbrehaar's products and services, and for activities
                notifications. You can unsubscribe for free at any time in your
                notification settings.
              </p>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
