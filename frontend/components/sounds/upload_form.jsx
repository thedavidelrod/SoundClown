import React, { Component } from "react";

export default class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.sound;
    this.handleSound = this.handleSound.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
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
      .then(() => this.props.history.push("/sound"));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
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
    return (
      <div className="upload-form">
        <form onSubmit={this.handleSubmit}>
          <h1>Upload to TimbreHaar</h1>
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
          <textarea
            className="upload-form-input-body"
            type="text"
            placeholder="Sound Description"
            onChange={this.update("body")}
          />
          <input type="file" onChange={this.handlePhoto} />
          Upload a photo
          <input type="file" onChange={this.handleSound} />
          Upload a sound
          <br />
          <br />
          <button>Submit a Sound</button>
        </form>
      </div>
    );
  }
}
