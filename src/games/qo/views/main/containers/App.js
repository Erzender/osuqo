import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { BackHandler, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Header, Left, Body, Right, Button } from 'native-base';
import rootActions from '../../../../../duck/actions';

/*
const styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
};
*/

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
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Ionicons name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text>Header</Text>
          </Body>
          <Right>
            <Button transparent>
              <Ionicons name="ios-menu" />
            </Button>
          </Right>
        </Header>
      </Container>
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
