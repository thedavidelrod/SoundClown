import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("user[username]", this.state.username);
    formData.append("user[email]", this.state.email);
    formData.append("user[password]", this.state.password);
    const user = Object.assign({}, this.state);
    this.props.processForm(formData);

    // this.props.closeModal();
  }

  demoLogin(e) {
    e.preventDefault();
    const user = { username: "testuser", password: "testuser" };
    this.props.login(user).then(() => this.props.closeModal());
  }

  renderErrors() {
    return (
      <ul className="errors-words">
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

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
          <h1 className="log-in">Enter TimbreHaar</h1>

          <div className="login-form">
            <br />
            <input
              className="login-input"
              type="email"
              placeholder="Enter your Email address"
              value={this.state.email}
              onChange={this.update("email")}
              className="login-input"
            />
            <br />
            <input
              className="login-input"
              type="username"
              placeholder="Pick a Username"
              value={this.state.username}
              onChange={this.update("username")}
              className="login-input"
            />
            <br />
            <input
              className="login-input"
              type="password"
              placeholder="Create a password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input"
            />
            <br />

            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
            <button className="demo-log" onClick={this.demoLogin}>
              Demo Login
            </button>
            {this.renderErrors()}
            <span className="fine-print-signup">
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

export default SignupForm;
