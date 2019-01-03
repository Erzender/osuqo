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

const signinRequest = () => ({
  type: types.SIGNIN_REQUEST,
});

const signinSuccess = () => ({
  type: types.SIGNIN_SUCCESS,
});

const signinFail = err => ({
  type: types.SIGNIN_FAIL,
  err,
});

const fetchUserRequest = () => ({
  type: types.FETCHUSER_REQUEST,
});

const fetchUserSuccess = ({ name, picture, rank }) => ({
  type: types.FETCHUSER_SUCCESS,
  name,
  picture,
  rank,
});

const fetchUserFail = err => ({
  type: types.FETCHUSER_FAIL,
  err,
});
const fetchUser = token => async dispatch => {
  dispatch(fetchUserRequest(token));
  try {
    let ret = await fetch(`${config.server}/api/account`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', token },
    });
    if (ret.status === 200) {
      ret = await ret.json();
      ret = ret.player.player;
      return dispatch(
        fetchUserSuccess({
          name: ret.charName,
          picture: ret.charPicture,
          rank: ret.rank,
        })
      );
    }
    return dispatch(fetchUserFail('unknown'));
  } catch (e) {
    return dispatch(fetchUserFail('unknown'));
  }
};

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
      dispatch(loginSuccess(ret.token));
      return dispatch(fetchUser(ret.token));
    }
    if (ret.status === 422 || ret.status === 403) {
      return dispatch(loginFail('wrong_creds'));
    }
    return dispatch(loginFail('unknown'));
  } catch (e) {
    return dispatch(loginFail('unknown'));
  }
};

const signin = (name, password) => async dispatch => {
  dispatch(signinRequest('password', ''));
  try {
    let ret = await fetch(`${config.server}/api/account`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    });
    if (ret.status === 200) {
      ret = await ret.json();

      return dispatch(signinSuccess());
    }
    return dispatch(signinFail('unknown'));
  } catch (e) {
    return dispatch(signinFail('unknown'));
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
exports.signin = signin;
exports.signinRequest = signinRequest;
exports.signinSuccess = signinSuccess;
exports.signinFail = signinFail;
exports.fetchUserRequest = fetchUserRequest;
exports.fetchUserSuccess = fetchUserSuccess;
exports.fetchUserFail = fetchUserFail;
exports.disconnect = disconnect;
exports.fetchUser = fetchUser;
