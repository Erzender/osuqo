import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import QO from './games/qo';
import OSU from './games/osu/App';
import actions from './duck/actions';

const styles = {
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  QO: {
    backgroundColor: '#552222',
    borderTopLeftRadius: 200,
  },
  osu: {
    backgroundColor: '#222255',
    borderBottomRightRadius: 200,
  },
  buttonName: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
};

const AppSelectorCpt = ({ view, QOButton, OSUButton }) => (
  <View style={styles.container}>
    {view === 'menu' && (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, styles.QO]} onPress={QOButton}>
          <Text style={styles.buttonName}>Quatre Oeufs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.osu]} onPress={OSUButton}>
          <Text style={styles.buttonName}>Osu!</Text>
        </TouchableOpacity>
      </View>
    )}
    {view === 'qo' && <QO />}
    {view === 'osu' && <OSU />}
  </View>
);

AppSelectorCpt.propTypes = {
  view: PropTypes.string.isRequired,
  QOButton: PropTypes.func.isRequired,
  OSUButton: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  view: state.root.game || 'menu',
});

const mapDispatchToProps = dispatch => ({
  QOButton: () => dispatch(actions.setGame('qo')),
  OSUButton: () => dispatch(actions.setGame('osu')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppSelectorCpt);
