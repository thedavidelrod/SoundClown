import React, { Component } from "react";

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-main">
        <div className="home-photo"></div>
        <div className="splash-text">
          <h1>Discover your sound in TimbreHaar</h1>
          <h2>
            Upload your first track and begin your journey. TimbreHaar gives you
            space to create, find your fans, and connect with other artists.
          </h2>
        </div>  
      </div>
    );
  }
}
