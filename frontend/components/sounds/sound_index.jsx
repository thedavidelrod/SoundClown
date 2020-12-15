import React, { Component } from "react";

export default class SoundIndex extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSounds();
  }

  render() {
    // let { sounds, errors, user } = this.props;
    // let soundItems = Object.keys(sounds).map(key =>(

    // ))

    return (
      <div className="sound-index">
        <h1 className="sound-text">This is Sound</h1>
      
        <span className="sound-image"></span>
      </div>
    );
  }
}
