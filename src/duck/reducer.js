import { REHYDRATE } from 'redux-persist';
import types from './types';

const initialState = {
  game: null,
  apiKey: '',
};

const root = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_GAME:
      console.log('yay');

      return {
        ...state,
        game: action.game,
      };
    case types.UPDATE_API_KEY:
      return {
        ...state,
        apiKey: action.apiKey,
      };
    case REHYDRATE:
      return { ...state, apiKey: action.payload.root.apiKey };
    default:
      return state;
  }
};

export default root;
