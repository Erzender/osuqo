import types from './types';
import config from '../../../config.json';

const toggleDrawer = value => ({
  type: types.TOGGLE_DRAWER,
  value,
});

const updateField = (field, value) => ({
  type: types.UPDATE_FIELD,
  field,
  value,
});

const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
});

const loginSuccess = token => ({
  type: types.LOGIN_SUCCESS,
  token,
});

const loginFail = err => ({
  type: types.LOGIN_FAIL,
  err,
});

const login = (name, password) => async dispatch => {
  dispatch(loginRequest('password', ''));
  try {
    let ret = await fetch(`${config.server}/api/authentication`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    });
    if (ret.status === 200) {
      ret = await ret.json();
      return dispatch(loginSuccess(ret.token));
    }
    if (ret.status === 422 || ret.status === 403) {
      return dispatch(loginFail('wrong_creds'));
    }
    return dispatch(loginFail('unknown'));
  } catch (e) {
    return dispatch(loginFail('unknown'));
  }
};

const disconnect = () => ({
  type: types.DISCONNECT,
});

exports.toggleDrawer = toggleDrawer;
exports.updateField = updateField;
exports.login = login;
exports.loginRequest = loginRequest;
exports.loginSuccess = loginSuccess;
exports.loginFail = loginFail;
exports.disconnect = disconnect;
