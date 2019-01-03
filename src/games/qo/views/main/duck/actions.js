import types from './types';

exports.toggleDrawer = value => ({
  type: types.TOGGLE_DRAWER,
  value,
});
