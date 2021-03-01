import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      photo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
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
    formData.append("user[photo]", this.state.photo);
    // formData.append("user[photoUrl]", this.state.photoUrl)
    const user = Object.assign({}, this.state);
          //  this.props.processForm({user: {  user }});
     this.props.processForm(formData);

      console.log(user);

    // this.props.closeModal();
  }

  handlePhoto(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photo: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  // handlePhoto(e) {
  //   e.preventDefault();
  //   this.setState({
  //     photo: e.target.files[0],
  //   });
  // }
  
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
              type="text"
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
            Upload A Profile Picture
            <input
              className="login-input"
              type="file"
              onChange={this.handlePhoto}
            ></input>
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
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
