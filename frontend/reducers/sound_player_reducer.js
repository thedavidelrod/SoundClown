import {
  RECEIVE_CURRENT_SOUND,
  RECEIVE_PREVIOUS_SOUND,
  RECEIVE_NEXT_SOUND,
  PLAY_SOUND,
  PAUSE_SOUND,
  RECEIVE_RANDOM_SOUNDS,
} from "../actions/sound_player_actions";

const defaultState = {
  playing: false,
  played: [],
  currentSoundId: null,
  queue: [],
};

const soundPlayerReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_SOUND:
      newState.currentSoundId = action.soundId;
      return newState;
    case RECEIVE_PREVIOUS_SOUND:
      if (!newState.played.includes(action.soundId)) {
        newState.played.push(action.soundId);
      }
      return newState;
    case RECEIVE_NEXT_SOUND:
      newState.queue.unshift(action.soundId);
      return newState;
    case PLAY_SOUND:
      newState.playing = true;
      return newState
    case PAUSE_SOUND:
      newState.playing = false;
      return newState
    case RECEIVE_RANDOM_SOUNDS:
      console.log(action.sounds)

      const sounds = Object.values(action.sounds);
      for (let i = 0; i < sounds.length - 1; i++) {
        let ranNum = Math.floor(Math.random() * (i + 1));
        [sounds[i], sounds[ranNum]] = [sounds[ranNum], sounds[i]];
      }
      sounds.forEach((sound) => {
        newState.queue.push(sound.id);
      });
      return newState;
    default:
      return state;
  }
};

export default soundPlayerReducer;
