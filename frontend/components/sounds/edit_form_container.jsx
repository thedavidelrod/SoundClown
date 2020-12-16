import React from "react";
import { connect } from "react-redux";
import { fetchSound, updateSound } from "../../actions/sounds_actions";
import SoundForm from './sound_form';


const mSTP = (state, ownProps) => ({
  sound: state.entities.sounds[ownProps.match.params.id],
  formType: 'edit',
});

const mDTP = (dispatch) => ({
  fetchSound: (id) => dispatch(fetchSound(id)),
  action: (sound, id) => dispatch(updateSound(sound, id)),
});

class EditSoundForm extends React.Component {
  componentDidMount() {
    this.props.fetchSound(this.props.match.params.id);
  }

render() {
const {action, sound, formType} = this.props
    return(
        <SoundForm
        action={action}
        formType={formType}
        sound= {sound}
        />

    )
}

}

export default connect(mSTP, mDTP)(EditSoundForm);
