export const RECEIVE_CURRENT_SOUND = "RECEIVE_CURRENT_SOUND";
export const RECEIVE_PREVIOUS_SOUND = "RECEIVE_PREVIOUS_SOUND";
export const RECEIVE_NEXT_SOUND = "RECEIVE_NEXT_SOUND";
export const PLAY_SOUND = "PLAY_SOUND";
export const PAUSE_SOUND = "PAUSE_SOUND";
export const RECEIVE_RANDOM_SOUNDS = "RECEIVE_RANDOM_SOUNDS";

export const receiveCurrentSound = (soundId) => {

  return {
    type: RECEIVE_CURRENT_SOUND,
    soundId,
  };
};

export const receivePreviousSound = (soundId) => {
  return {
    type: RECEIVE_PREVIOUS_SOUND,
    soundId,
  };
};

export const receiveNextSound = (soundId) => {
  return {
    type: RECEIVE_NEXT_SOUND,
    soundId,
  };
};

export const playSound = () => {
  return {
    type: PLAY_SOUND,
  };
};

export const pauseSound = () => {
  return {
    type: PAUSE_SOUND,
  };
};

export const receiveRandomSounds = (sounds) => {
  return {
    type: RECEIVE_RANDOM_SOUNDS,
    sounds,
  };
};

