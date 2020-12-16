import React, { Component } from "react";
import SoundIndexItem from "./sound_index_item";

export default class SoundIndex extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchSounds();
  }

  render() {
    
    let { sounds, user } = this.props;
    let soundItems = Object.keys(sounds).map((key) => (
      <SoundIndexItem key={key} sound={sounds[key]} user={user} />
    ));

    return (
      <div className="sound-index">
        {soundItems}
      </div>
    );
  }
}
