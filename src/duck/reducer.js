import types from './types';
import qoTypes from '../games/qo/views/main/duck/types';

const initialState = {
  game: null,
  apiKey: '',
  qoToken: null,
};

const root = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_GAME:
      return {
        ...state,
        game: action.game,
      };
    case types.UPDATE_API_KEY:
      return {
        ...state,
        apiKey: action.apiKey,
      };
    case qoTypes.LOGIN_SUCCESS:
      return {
        ...state,
        qoToken: action.token,
      };
    case qoTypes.DISCONNECT:
      return {
        ...state,
        qoToken: null,
      };
    default:
      return state;
  }
};

export default root;
