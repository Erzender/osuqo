import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './App/reducer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const store = createStore(rootReducer);

export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  </Provider>
);
