import types from './types';

const initialState = {
  drawer: false,
  fieldName: '',
  fieldPassword: '',
  loading: false,
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
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default qo;
