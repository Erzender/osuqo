import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, BackHandler } from 'react-native';
import rootActions from '../../duck/actions';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
};

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
    return (
      <View style={styles.container}>
        <Text>osu</Text>
      </View>
    );
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
