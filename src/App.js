import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import thunkMiddleware from 'redux-thunk';
import { Constants } from 'expo';

import root from './duck/reducer';
import AppSelector from './AppSelector';

const rootReducer = combineReducers({ root });

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  statusBar: {
    minHeight: Constants.statusBarHeight,
    maxHeight: Constants.statusBarHeight,
    flex: 1,
  },
});

const store = createStore(persistedReducer, compose(applyMiddleware(thunkMiddleware)));
const persistor = persistStore(store);

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar hidden />
      <View style={styles.container}>
        <AppSelector />
      </View>
    </PersistGate>
  </Provider>
);
