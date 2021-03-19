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
            <h2>Upload your first sounds and begin your journey.</h2>
            <h2>
              TimbreHaar gives you space to create, find your fans, and connect
              with other artists.
            </h2>
          </div>
        </div>
        <div className="home-photo"></div>
        <div className="splash-bottom">
          <h3 className="bl-header">
            Hear what's trending for free in the TimbreHaar community
          </h3>
          <ul className="badgeListUl">
            <a
              className="badge-a-tags"
              href="/#"
              onClick={() => this.props.openModal("signup")}
            >
              <li className="badge">
                <div className="badgeImage">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/4195DlfcPrL.jpg" />
                </div>
                <div className="badgeInfo">
                  <p className="badgeDet bdsn">Killing Roots</p>
                  <p className="badgeDet bda">Black Water Death Grip</p>
                </div>
              </li>
            </a>
            <a
              className="badge-a-tags"
              href="/#"
              onClick={() => this.props.openModal("signup")}
            >
              <li className="badge">
                <div className="badgeImage">
                  <img src="https://img.discogs.com/LDdf-ilh1er-QEOLMYdv9l12EWE=/fit-in/600x599/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8745706-1467854901-9253.jpeg.jpg" />
                </div>
                <div className="badgeInfo">
                  <p className="badgeDet bdsn">Mammoth Life</p>
                  <p className="badgeDet bda">Wanna Be Loved</p>
                </div>
              </li>
            </a>
            <a
              className="badge-a-tags"
              href="/#"
              onClick={() => this.props.openModal("signup")}
            >
              <li className="badge">
                <div className="badgeImage">
                  <img src="https://m.media-amazon.com/images/I/71038JzpE+L._SS500_.jpg" />
                </div>
                <div className="badgeInfo">
                  <p className="badgeDet bdsn">Union Trade</p>
                  <p className="badgeDet bda">Why We Need Night</p>
                </div>
              </li>
            </a>
            <a
              className="badge-a-tags"
              href="/#"
              onClick={() => this.props.openModal("signup")}
            >
              <li className="badge">
                <div className="badgeImage">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/81-aiM2eOqL._SL1500_.jpg" />
                </div>
                <div className="badgeInfo">
                  <p className="badgeDet bdsn">311</p>
                  <p className="badgeDet bda">Transistor</p>
                </div>
              </li>
            </a>
            <a
              className="badge-a-tags"
              href="/#"
              onClick={() => this.props.openModal("signup")}
            >
              <li className="badge">
                <div className="badgeImage">
                  <img src="https://f4.bcbits.com/img/a0077431454_16.jpg" />
                </div>
                <div className="badgeInfo">
                  <p className="badgeDet bdsn">The Physics</p>
                  <p className="badgeDet bda">Love is a Business</p>
                </div>
              </li>
            </a>
            <a
              className="badge-a-tags"
              href="/#"
              onClick={() => this.props.openModal("signup")}
            >
              <li className="badge">
                <div className="badgeImage">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/51jX8V%2B1nZL._SX355_.jpg  " />
                </div>
                <div className="badgeInfo">
                  <p className="badgeDet bdsn">Papoose</p>
                  <p className="badgeDet bda">Best Of Papoose</p>
                </div>
              </li>
            </a>
            <a
              className="badge-a-tags"
              href="/#"
              onClick={() => this.props.openModal("signup")}
            >
              <li className="badge">
                <div className="badgeImage">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/81Bw0s3lI%2BL._SL1500_.jpg" />
                </div>
                <div className="badgeInfo">
                  <p className="badgeDet bdsn">RDGLDGRN</p>
                  <p className="badgeDet bda">Doing The Most</p>
                </div>
              </li>
            </a>
            <a
              className="badge-a-tags"
              href="/#"
              onClick={() => this.props.openModal("signup")}
            >
              <li className="badge">
                <div className="badgeImage">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/41929H1X6FL.jpg" />
                </div>
                <div className="badgeInfo">
                  <p className="badgeDet bdsn">Buddy Rich</p>
                  <p className="badgeDet bda">Stick It</p>
                </div>
              </li>
            </a>
            <a
              className="badge-a-tags"
              href="/#"
              onClick={() => this.props.openModal("signup")}
            >
              <li className="badge">
                <div className="badgeImage">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/61Gh3AbjJML._SL1000_.jpg" />
                </div>
                <div className="badgeInfo">
                  <p className="badgeDet bdsn">San Quinn</p>
                  <p className="badgeDet bda">The Fillmore Lion</p>
                </div>
              </li>
            </a>
            <a
              className="badge-a-tags"
              href="/#"
              onClick={() => this.props.openModal("signup")}
            >
              <li className="badge">
                <div className="badgeImage">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/71wboFoEScL._SY355_.jpg" />
                </div>
                <div className="badgeInfo">
                  <p className="badgeDet bdsn">Dizzee Rascal</p>
                  <p className="badgeDet bda">Raskit</p>
                </div>
              </li>
            </a>
            <a
              className="badge-a-tags"
              href="/#"
              onClick={() => this.props.openModal("signup")}
            >
              <li className="badge">
                <div className="badgeImage">
                  <img src="https://img.discogs.com/dQmDukWrZMV0T3zyC3DEvxy4HVw=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-921892-1333474888.jpeg.jpg" />
                </div>
                <div className="badgeInfo">
                  <p className="badgeDet bdsn">Cliff Nobles</p>
                  <p className="badgeDet bda">The Horse</p>
                </div>
              </li>
            </a>
            <a
              className="badge-a-tags"
              href="/#"
              onClick={() => this.props.openModal("signup")}
            >
              <li className="badge">
                <div className="badgeImage">
                  <img src="https://images-na.ssl-images-amazon.com/images/I/41VVYVAET2L._QL70_ML2_.jpg" />
                </div>
                <div className="badgeInfo">
                  <p className="badgeDet bdsn">Candiria</p>
                  <p className="badgeDet bda">300% Density</p>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}
