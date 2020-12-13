import React, { Component } from "react";

export default class SoundIndex extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSounds();
  }

  render() {
    return (
      <div>
        <h1>this is sound</h1>
      </div>
    );  
  }
} 