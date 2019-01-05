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
    backgroundColor: '#333333',
    justifyContent: 'center',
    borderLeftWidth: 8,
    borderColor: '#552222',
    marginBottom: 1,
    paddingLeft: 20,
  },
  drawerText: {
    fontSize: 20,
    color: 'white',
  },
};

const Content = ({ back, logout }) => (
  <View style={{ flex: 1, backgroundColor: '#222222', paddingTop: 70 }}>
    <TouchableOpacity style={styles.drawerButton} onPress={back}>
      <Text style={styles.drawerText}>Back</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.drawerButton} onPress={logout}>
      <Text style={styles.drawerText}>Disconnect</Text>
    </TouchableOpacity>
  </View>
);

Content.propTypes = {
  back: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

class AppCpt extends React.Component {
  componentDidMount() {
    const { token, fetchAPI } = this.props;
    if (token) {
      fetchAPI(token);
    }
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
    const { goBack, toggleDrawer, drawerOpen, disconnect, notifId } = this.props;
    const closeDrawer = () => toggleDrawer(false);
    const logout = () => disconnect(notifId);
    return (
      <Drawer
        onCloseStart={closeDrawer}
        panThreshold={0.25}
        open={drawerOpen}
        ref={ref => {
          this.drawer = ref;
        }}
        content={<Content back={goBack} logout={logout} />}
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
  token: PropTypes.string.isRequired,
  fetchAPI: PropTypes.func.isRequired,
  notifId: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  drawerOpen: state.qo.drawer,
  token: state.root.qoToken || '',
  notifId: state.qo.notificationId || 0,
});

const mapDispatchToProps = dispatch => ({
  goBack: () => {
    dispatch(rootActions.setGame(null));
    dispatch(mainActions.toggleDrawer(false));
  },
  toggleDrawer: value => dispatch(mainActions.toggleDrawer(value)),
  disconnect: id => {
    dispatch(mainActions.logout(id));
    dispatch(mainActions.toggleDrawer(false));
  },
  fetchAPI: token => dispatch(mainActions.fetchUser(token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCpt);
