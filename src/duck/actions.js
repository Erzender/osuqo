import types from './types';

exports.setGame = game => ({
  type: types.SET_GAME,
  game,
});
