import React, { Component } from "react";

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-main">
        <div className="splash-text">
          <h1 className="splash-title">Discover your sound in TimbreHaar</h1>
          <div className="splash-sub">
            <h2 >
              Upload your first sounds and begin your journey.
            </h2>
            <h2>
              TimbreHaar gives you space to create, find your fans, and connect
              with other artists.
            </h2>
          </div>
        </div>
        <div className="home-photo"></div>
      </div>
    );
  }
}
