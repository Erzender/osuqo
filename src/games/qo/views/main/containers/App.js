import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
  test: state.root.test,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppCpt);
