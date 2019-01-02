import { connect } from 'react-redux';
import React from 'react';
import { View, Text, TextInput, Button, Linking } from 'react-native';
import PropTypes from 'prop-types';
import actions from '../../duck/actions';

const styles = {
  item: {
    margin: 10,
  },
};

function getApiKey() {
  Linking.openURL('https://osu.ppy.sh/p/api');
}

const mapStateToProps = state => ({
  apiKey: state.root.apiKey,
});

class Setup extends React.Component {
  static navigationOptions = {
    title: 'Setup API key',
  };

  state = {
    apiKey: this.props.apiKey, // eslint-disable-line react/destructuring-assignment
  };

  save = () => {
    const { dispatch, navigation } = this.props;
    const { apiKey } = this.state;
    dispatch(actions.updateApiKey(apiKey));
    navigation.navigate('Search');
  };

  render() {
    const { apiKey } = this.state;
    return (
      <View>
        <Text style={styles.item}>Your osu! API key:</Text>
        <TextInput
          style={styles.item}
          onChangeText={text => this.setState({ apiKey: text })}
          value={apiKey}
        />
        <View style={styles.item}>
          <Button title="Get API key" onPress={getApiKey} />
        </View>
        <View style={styles.item}>
          <Button title="Save" onPress={this.save} />
        </View>
      </View>
    );
  }
}

Setup.propTypes = {
  apiKey: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Setup);
