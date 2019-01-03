import types from './types';

exports.setGame = game => ({
  type: types.SET_GAME,
  game,
});

exports.updateApiKey = apiKey => ({
  type: types.UPDATE_API_KEY,
  apiKey,
});
