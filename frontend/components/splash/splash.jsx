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
            <a className="badge-a-tags" href="/#/signup">
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
            <a className="badge-a-tags" href="/#/signup">
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
            <a className="badge-a-tags" href="/#/signup">
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
            <a className="badge-a-tags" href="/#/signup">
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
            <a className="badge-a-tags" href="/#/signup">
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
            <a className="badge-a-tags" href="/#/signup">
              <li className="badge">
                <div className="badgeImage">
                  <img src="data:image/jpeg;base64,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" />
                </div>
                <div className="badgeInfo">
                  <p className="badgeDet bdsn">Papoose</p>
                  <p className="badgeDet bda">Best Of Papoose</p>
                </div>
              </li>
            </a>
            <a className="badge-a-tags" href="/#/signup">
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
            <a className="badge-a-tags" href="/#/signup">
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
            <a className="badge-a-tags" href="/#/signup">
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
            <a className="badge-a-tags" href="/#/signup">
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
            <a className="badge-a-tags" href="/#/signup">
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
            <a className="badge-a-tags" href="/#/signup">
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
