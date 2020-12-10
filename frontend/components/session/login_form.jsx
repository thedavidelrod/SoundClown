import React, { Component } from "react";

export default class LogInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    this.props.receiveErrors([]);
  }


  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit()}>
          <input
            type="text"
            placeholder="Your email address or profileURL"
            onChange={this.props.update("email")} />
        </form>
      </div>
    );
  }
}
