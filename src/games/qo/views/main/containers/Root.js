import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Header, Left, Body, Button, Container } from 'native-base';
import mainActions from '../duck/actions';
import Login from './Login';

const styles = {
  icon: {
    fontSize: 25,
    color: 'white',
  },
  header: {
    backgroundColor: '#552222',
  },
};

const Root = ({ openDrawer, loggedIn }) => (
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
    {!loggedIn && <Login />}
  </Container>
);

Root.propTypes = {
  openDrawer: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedIn: state.qo.token || false,
});

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(mainActions.toggleDrawer(true)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
