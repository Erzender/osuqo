import types from './types';

const initialState = {
  drawer: false,
};

const qo = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_DRAWER:
      return {
        ...state,
        drawer: action.value,
      };
    default:
      return state;
  }
};

export default qo;
