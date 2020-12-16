import {connect} from 'react-redux'
import SoundForm from './sound_form'
import {createSound} from '../../actions/sounds_actions'
import {withRouter} from 'react-router-dom'

const mSTP = (state) => {
    
    return{
    errors: state.errors.tracks,
    sound: {
        uploader_id: state.session.id,
        title: '',
        tag: '',
        body: '',
        photo: null,
        sound: null,
    },
    formType: 'upload'
}

}

const mDTP = (dispatch) => ({
action: (sound) => dispatch(createSound(sound))

})

export default withRouter(connect(mSTP, mDTP)(SoundForm));

