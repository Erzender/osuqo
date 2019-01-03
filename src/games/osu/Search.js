import { connect } from 'react-redux';
import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  item: {
    margin: 10,
  },
};

const mapStateToProps = state => ({
  apiKey: state.root.apiKey,
});

class Search extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  state = {
    username: '',
  };

  componentDidMount() {
    const { apiKey, navigation } = this.props;
    if (!apiKey || apiKey === '') {
      navigation.navigate('Setup');
    }
  }

  fetchOsuUser = async () => {
    const { apiKey } = this.props;
    const { username } = this.state;
    const users = await fetch(`https://osu.ppy.sh/api/get_user?k=${apiKey}&u=${username}`).then(
      data => data.json()
    );
    if (users.length > 0) {
      return users[0];
    }
    return null;
  };

  search = async () => {
    const { navigation } = this.props;
    const user = await this.fetchOsuUser();
    if (user) {
      navigation.navigate('Profile', { user });
    } else {
      Alert.alert(
        'An error occured',
        'You either entered a wrong username or your API key is wrong.',
        [{ text: 'OK' }]
      );
    }
  };

  changeApiKey = () => {
    const { navigation } = this.props;
    navigation.navigate('Setup');
  };

  render() {
    const { username } = this.state;
    return (
      <View>
        <Text style={styles.item}>Enter a username:</Text>
        <TextInput
          style={styles.item}
          onChangeText={text => this.setState({ username: text })}
          value={username}
        />
        <View style={styles.item}>
          <Button title="Search" onPress={this.search} />
        </View>
        <View style={styles.item}>
          <Button style={styles.item} title="Change API Key" onPress={this.changeApiKey} />
        </View>
      </View>
    );
  }
}

Search.propTypes = {
  apiKey: PropTypes.string,
};

Search.defaultProps = {
  apiKey: '',
};

export default connect(mapStateToProps)(Search);
