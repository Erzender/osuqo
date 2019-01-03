import React from 'react';
import { connect } from 'react-redux';
import { Text, ActivityIndicator, View } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Header, Left, Body, Button, Container } from 'native-base';
import mainActions from '../duck/actions';
import Login from './Login';
import Profile from './Profile';

const styles = {
  icon: {
    fontSize: 25,
    color: 'white',
  },
  header: {
    backgroundColor: '#552222',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Root = ({ openDrawer, loggedIn, loading }) => (
  <Container>
    <Header style={styles.header}>
      <Left>
        <Button transparent onPress={openDrawer}>
          <Ionicons name="ios-menu" style={styles.icon} />
        </Button>
      </Left>
      <Body>
        <Text style={styles.icon}>Quatre Oeufs</Text>
      </Body>
    </Header>
    {!loggedIn && !loading && <Login />}
    {loading && (
      <View style={styles.loading}>
        <ActivityIndicator color="#552222" size={80} />
      </View>
    )}
    {!loading && loggedIn && <Profile />}
  </Container>
);

Root.propTypes = {
  openDrawer: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: !!state.root.qoToken,
  loading: state.qo.loading === undefined ? false : state.qo.loading,
});

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(mainActions.toggleDrawer(true)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
