import {
  RECEIVE_CURRENT_SOUND,
  PLAY_PAUSE_SOUND,
  END_CURRENT_SOUND,
  SEEK_SOUND,
  SET_SOUND_PLAYER,
  SEEK_PLAYER,
  SET_PROGRESS,
} from "../actions/player_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import merge from "lodash/merge";

const defaultState = {
  currentSound: null,
  playing: false,
  player: null,
  soundId: -1,
  playerSeek: 0,
  waveSeek: 0,
  progressSoundId: {},
};

const soundplayerReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  let newState;
  let change;
  switch (action.type) {
    case RECEIVE_CURRENT_SOUND:
      change = {
        currentSound: action.sound,
        playing: true,
        soundId: action.sound.id,
        seek: 0,
      };
      return merge({}, oldState, change);
    case PLAY_PAUSE_SOUND:
      if (action.soundId !== oldState.soundId) {
        // if play_paused sound is not whats currently playing
        return merge({}, oldState, {
          playing: true, //action.boolean,
          soundId: action.soundId,
          waveSeek: oldState.progressSoundId[action.soundId] || 0,
          playerSeek: oldState.progressSoundId[action.soundId] || 0,
          progressSoundId: { [action.soundId]: action.progress }, //setting leaving sound progress out
        });
      } else {
        return merge({}, oldState, {
          playing: !oldState.playing,
          progressSoundId: { [action.soundId]: action.progress },
        });
      }
    case END_CURRENT_SOUND:
      return merge({}, oldState, {
        playing: false,
        progressSoundId: { [action.soundId]: 0 },
        waveSeek: 0,
        playerSeek: 0,
      });
    case SET_PROGRESS:
      return merge({}, oldState, {
        progressSoundId: { [action.soundId]: action.progress },
      });
    case LOGOUT_CURRENT_USER:
      return defaultState;
    case SEEK_SOUND:
      return merge({}, oldState, { seek: action.seconds });
    case SEEK_PLAYER:
      return Object.assign({}, oldState, { playerSeek: action.progress });
    case SET_SOUND_PLAYER:
      return merge({}, oldState, { player: action.soundplayer });
    
    default:
      return oldState;
  }
};

export default soundplayerReducer;
