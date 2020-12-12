import React, { Component } from "react";

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
    //this.props.closeModal();
  }

  renderErrors() {
    console.log(this.props.errors)
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
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
    console.log(this.props)
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />

          <h1>Log In</h1>
          <div className="login-form">
            <br />
            <label>
              
              {this.renderErrors()}
              <input
                placeholder="Your email address"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              <input
                placeholder="Your password"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            <br />
            <label>
              <button onClick={this.demoLogin}>Demo Login</button>
            </label>
            <br />
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}
