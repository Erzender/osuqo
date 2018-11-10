import types from './types';

const initialState = {
  game: null,
};

const root = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_GAME:
      return {
        ...state,
        game: action.game,
      };
    default:
      return state;
  }
};

export default root;
