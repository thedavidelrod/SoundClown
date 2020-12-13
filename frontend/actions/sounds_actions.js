import * as SoundAPI from "../util/sounds_util";

export const RECEIVE_SOUNDS = `RECEIVE_SOUNDS`;
export const RECEIVE_SOUND = `RECEIVE_SOUND`;
export const REMOVE_SOUND = `REMOVE_SOUND`;
export const RECEIVE_SOUND_ERRORS = `RECEIVE_SOUND_ERRORS`;
export const REQUEST_SOUND_FETCH = `REQUEST_SOUND_FETCH`;

export const receiveSounds = (sounds) => ({
  type: RECEIVE_SOUNDS,
  sounds,
});

export const receiveSound = (payload) => ({
  type: RECEIVE_SOUND,
  payload,
});

export const removeSound = (soundId) => ({
  type: REMOVE_SOUND,
  soundId,
});

export const receiveSoundErrors = (errors) => ({
  type: RECEIVE_SOUND_ERRORS,
  errors,
});

export const requestSoundFetch = () => ({
  type: REQUEST_SOUND_FETCH,
});

export const fetchSounds = () => (dispatch) => {
  return SoundAPI.fetchSounds().then(
    (sounds) => dispatch(receiveSounds(sounds)),
    (err) => dispatch(receiveSoundErrors(err.responseJSON))
  );
};

export const fetchSound = (id) => (dispatch) => {
  dispatch(requestSoundFetch());
  return SoundAPI.fetchSound(id).then(
    (payload) => dispatch(receiveSound(payload)),
    (err) => dispatch(receiveTrackErrors(err.responseJSON))
  );
};

export const createSound = (sound) => (dispatch) => {
  return SoundAPI.createSound(sound).then(
    (sound) => dispatch(receiveSound(sound)),
    (err) => dispatch(err.responseJSON)
  );
};

export const updateSound = (sound, id) => (dispatch) => {
  return SoundAPI.updateSound(sound, id).then(
    (sound) => dispatch(receiveSound(sound)),
    (err) => dispatch(err.responseJSON)
  );
};

export const deleteSound = (soundId) => (dispatch) => {
  return SoundAPI.deleteSound(soundId).then(
    (sound) => dispatch(removeSound(sound)),
    (err) => dispatch(err.responseJSON)
  );
};
