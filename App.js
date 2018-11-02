import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import thunkMiddleware from 'redux-thunk';

import root from './App/reducer';

const rootReducer = combineReducers({ root });

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const store = createStore(persistedReducer, compose(applyMiddleware(thunkMiddleware)));
const persistor = persistStore(store);

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </PersistGate>
  </Provider>
);
