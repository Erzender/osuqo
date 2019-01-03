import types from './types';

exports.toggleDrawer = value => ({
  type: types.TOGGLE_DRAWER,
  value,
});

exports.updateField = (field, value) => ({
  type: types.UPDATE_FIELD,
  field,
  value,
});
