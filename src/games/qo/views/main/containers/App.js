import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { BackHandler, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Left, Body, Drawer, Button } from 'native-base';
import rootActions from '../../../../../duck/actions';
import mainActions from '../duck/actions';

const styles = {
  icon: {
    fontSize: 25,
    color: 'white',
  },
  header: {
    backgroundColor: '#552222',
  },
};

const Content = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <Text>menu</Text>
  </View>
);

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
    const { toggleDrawer, drawerOpen } = this.props;
    const closeDrawer = () => toggleDrawer(false);
    const openDrawer = () => toggleDrawer(true);
    return (
      <Container>
        <Drawer
          onCloseStart={closeDrawer}
          panThreshold={0.25}
          open={drawerOpen}
          ref={ref => {
            this.drawer = ref;
          }}
          content={<Content />}
        >
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
        </Drawer>
      </Container>
    );
  }
}

AppCpt.propTypes = {
  goBack: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  drawerOpen: state.qo.drawer,
});

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(rootActions.setGame(null)),
  toggleDrawer: value => dispatch(mainActions.toggleDrawer(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCpt);
