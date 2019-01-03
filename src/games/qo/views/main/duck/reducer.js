import types from './types';

const initialState = {
  drawer: false,
  token: null,
  fieldName: '',
  fieldPassword: '',
};

const qo = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_DRAWER:
      return {
        ...state,
        drawer: action.value,
      };
    case types.UPDATE_FIELD:
      return {
        ...state,
        fieldName: action.field === 'name' ? action.value : state.fieldName,
        fieldPassword: action.field === 'password' ? action.value : state.fieldPassword,
      };
    default:
      return state;
  }
};

export default qo;
