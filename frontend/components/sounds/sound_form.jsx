import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class SoundForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.sound;
    this.handleSound = this.handleSound.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
      
  }

  // componentDidUpdate() {

  // }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("sound[uploader_id]", this.state.uploader_id);
    formData.append("sound[title]", this.state.title);
    formData.append("sound[body]", this.state.body);
    formData.append("sound[tag]", this.state.tag);
    formData.append("sound[photo]", this.state.photo);
    formData.append("sound[sound]", this.state.sound);

    this.props
      .action(formData, this.props.sound.id)
      .then(() => this.props.history.push("/sounds"));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderErrors() {
    return (
      <ul className="errors-words">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
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

  handleSound(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ sound: file, soundUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {

//  debugger
    const photoPreview = this.state.photoUrl ? (
      <img className="upload-photo-preview" src={this.state.photoUrl} />
    ) : null;

    const uploadPhotoButton = !this.state.photoUrl ? (
      <label className="upload-photo-label">
        <FontAwesomeIcon icon="camera" />
        Upload Image
        <input
          type="file"
          id="file"
          accept="image/*"
          onChange={this.handlePhoto}
        />
      </label>
    ) : (
      <label className="upload-photo-label">
        <FontAwesomeIcon icon="camera" />
        Update Image
        <input
          type="file"
          id="file"
          accept="image/*"
          onChange={this.handlePhoto}
        />
      </label>
    );

    return (
      <div className="upload-form">
        <form onSubmit={this.handleSubmit} className="ui-form">
          <h1 className="upload-h1">Upload to TimbreHaar</h1>
          <input
            className="upload-form-input-title"
            type="text"
            placeholder="Sound Name"
            onChange={this.update("title")}
          />
          <input
            className="upload-form-input-tag"
            type="text"
            placeholder="tag/genre"
            onChange={this.update("tag")}
          />
          <input
            className="upload-form-input-body"
            type="text"
            placeholder="Artist"
            onChange={this.update("body")}
          />
          {/* <div className="upload-details-form">
            <div className="song-photo">
              {photoPreview}
              <span className="upload-submit">
                <input
                  type="file"
                  onChange={this.handlePhoto}
                  accept="image/*"
                  className="ui-photo"
                />
                Upload a photo
              </span>
            </div>
          </div> */}
          <div className="upload-details-form">
            <div className="song-photo">
              {photoPreview}
              {uploadPhotoButton}
            </div>
          </div>
          <input
            type="file"
            onChange={this.handleSound}
            accept="audio/*, .m4a, .mp3, .wav, .flac .ogg, .aac"
            className="ui-sound"
            background="#orange"
          />
          Upload a sound
          <br />
          <br />
          {this.renderErrors()}
          <button>Submit a Sound</button>
        </form>
      </div>
    );
  }
}
