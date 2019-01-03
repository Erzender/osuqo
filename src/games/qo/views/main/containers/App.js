import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { BackHandler, Text, View, TouchableOpacity } from 'react-native';
import { Drawer } from 'native-base';
import rootActions from '../../../../../duck/actions';
import mainActions from '../duck/actions';
import Root from './Root';

const styles = {
  drawerButton: {
    height: 70,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    borderLeftWidth: 8,
    borderColor: '#552222',
    marginBottom: 1,
    paddingLeft: 20,
  },
  drawerText: {
    fontSize: 20,
  },
};

const Content = ({ back, disconnect }) => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <TouchableOpacity style={styles.drawerButton} onPress={back}>
      <Text style={styles.drawerText}>Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.drawerButton} onPress={disconnect}>
      <Text style={styles.drawerText}>Disconnect</Text>
    </TouchableOpacity>
  </View>
);

Content.propTypes = {
  back: PropTypes.func.isRequired,
  disconnect: PropTypes.func.isRequired,
};

class AppCpt extends React.Component {
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      const { goBack, drawerOpen, toggleDrawer } = this.props;
      if (drawerOpen === true) {
        toggleDrawer(false);
      } else {
        goBack();
      }
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    const { goBack, toggleDrawer, drawerOpen, disconnect } = this.props;
    const closeDrawer = () => toggleDrawer(false);
    return (
      <Drawer
        onCloseStart={closeDrawer}
        panThreshold={0.25}
        open={drawerOpen}
        ref={ref => {
          this.drawer = ref;
        }}
        content={<Content back={goBack} disconnect={disconnect} />}
      >
        <Root />
      </Drawer>
    );
  }
}

AppCpt.propTypes = {
  goBack: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  disconnect: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  drawerOpen: state.qo.drawer,
});

const mapDispatchToProps = dispatch => ({
  goBack: () => {
    dispatch(rootActions.setGame(null));
    dispatch(mainActions.toggleDrawer(false));
  },
  toggleDrawer: value => dispatch(mainActions.toggleDrawer(value)),
  disconnect: () => {
    dispatch(mainActions.disconnect());
    dispatch(mainActions.toggleDrawer(false));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCpt);
