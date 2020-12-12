import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    // this.props.closeModal();
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
          <h1>Enter TimbreHaar</h1>

          <div className="login-form">
            <br />
            <input
              type="text"
              placeholder="Enter your Email address"
              value={this.state.email}
              onChange={this.update("email")}
              className="login-input"
            />
            <br />

            <input
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
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
