import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import rootActions from '../../duck/actions';
import Setup from './Setup';
import Search from './Search';
import Profile from './Profile';

const App = createAppContainer(
  createStackNavigator({
    Search: { screen: Search },
    Setup: { screen: Setup },
    Profile: { screen: Profile },
  })
);

class AppCpt extends React.Component {
  componentDidMount() {
    const { goBack } = this.props;
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      goBack();
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return <App />;
  }
}

AppCpt.propTypes = {
  goBack: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(rootActions.setGame(null)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCpt);
