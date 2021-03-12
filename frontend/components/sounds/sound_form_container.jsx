import {connect} from 'react-redux'
import SoundForm from './sound_form'
import {createSound} from '../../actions/sounds_actions'
import {withRouter} from 'react-router-dom'

const mSTP = (state) => {
    
    return {
      errors: state.errors.session,
      sound: {
        uploader_id: state.session.id,
        title: "",
        tag: "",
        body: "",
        photo: null,
        sound: null,
        photoUrl: "",
      },
      formType: "upload",
    };

}

const mDTP = (dispatch) => ({
  action: (sound) => dispatch(createSound(sound)),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal) => dispatch(openModal(modal)),
  receiveError: (error) => dispatch(receiveError(error)),
  clearErrors: () => dispatch(clearErrors()),
  receiveErrors: (errors) => dispatch(receiveErrors(errors)),
});

export default withRouter(connect(mSTP, mDTP)(SoundForm));

