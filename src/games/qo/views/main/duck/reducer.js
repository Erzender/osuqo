import types from './types';

const initialState = {
  drawer: false,
  fieldName: '',
  fieldPassword: '',
  loading: false,
  message: '',
  name: 'Bob',
  rank: 'player',
  picture:
    'https://www.brick-a-brack.com/users/image/800/600/?1546251884https://www.brick-a-brack.com/users/image/800/600/?1546251884',
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
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        message: '',
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        message: 'Could not log in.',
      };
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'Account created !',
      };
    case types.SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
        message: '',
      };
    case types.SIGNIN_FAIL:
      return {
        ...state,
        loading: false,
        message: 'Could not create account.',
      };
    case types.FETCHUSER_SUCCESS:
      return {
        ...state,
        loading: false,
        name: action.name,
        picture: action.picture,
        rank: action.rank,
      };
    case types.FETCHUSER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCHUSER_FAIL:
      return {
        ...state,
        loading: false,
      };
    case types.DISCONNECT:
      return {
        ...state,
        name: '',
        picture: '',
        rank: '',
      };
    default:
      return state;
  }
};

export default qo;
