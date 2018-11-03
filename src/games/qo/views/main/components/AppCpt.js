import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
};

const AppCpt = ({ test }) => (
  <View style={styles.container}>
    <Text>{test}</Text>
  </View>
);

AppCpt.propTypes = {
  test: PropTypes.string.isRequired,
};

export default AppCpt;
