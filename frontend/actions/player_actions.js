export const RECEIVE_CURRENT_SOUND = "RECEIVE_CURRENT_SOUND";
export const PLAY_PAUSE_SOUND = "PLAY_PAUSE_SOUND";
export const SOUND_PROGRESS = "SOUND_PROGRESS";
export const END_CURRENT_SOUND = "END_CURRENT_SOUND";
export const SEEK_SOUND = "SEEK_SOUND";
export const SET_SOUND_PLAYER = "SET_SOUND_PLAYER";
export const SEEK_WAVE_FORM = "SEEK_WAVE_FORM";
export const SEEK_PLAYER = "SEEK_PLAYER";
export const SET_PROGRESS = "SET_PROGRESS";

export const receiveCurrentSound = (sound) => ({
  type: RECEIVE_CURRENT_SOUND
  ,
  sound,
});

export const playPauseSound = (boolean, soundId, progress) => ({
  type: PLAY_PAUSE_SOUND,
  boolean,
  soundId,
  progress,
});

export const setSeekSound = (seconds) => ({
  type: SEEK_SOUND,
  seconds,
});

export const soundProgress = (currentTime, duration) => ({
  type: SOUND_PROGRESS,
  currentTime,
  duration,
});

export const setSoundPlayer = (soundplayer) => ({
  type: SET_SOUND_PLAYER,
  soundplayer,
});

export const seekWaveForm = (progress, soundId) => ({
  type: SEEK_WAVE_FORM,
  progress,
  soundId,
});

export const seekPlayer = (progress) => ({
  type: SEEK_PLAYER,
  progress,
});

export const setCurrentSound = (sound) => (dispatch) =>
  dispatch(receiveCurrentSound(sound));

export const setPlayPause = (boolean, soundId, progress) => (dispatch) =>
  dispatch(playPauseSound(boolean, soundId, progress));

export const setSoundProgress = (currentTime, duration) => (dispatch) =>
  dispatch(soundProgress(currentTime, duration));

export const endCurrentSound = (soundId) => (dispatch) =>
  dispatch({
    type: END_CURRENT_SOUND,
    soundId,
  });
 
export const seekSound = (seconds) => (dispatch) =>
  dispatch(setSeekSound(seconds));

export const setProg = (soundId, progress) => (dispatch) =>
  dispatch({
    type: SET_PROGRESS,
    soundId,
    progress,
  });
