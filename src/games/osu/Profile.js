import { connect } from 'react-redux';
import React from 'react';
import { View, Text, Image } from 'react-native';
import numeral from 'numeral';
import CountryRank from './components/CountryRank';
import ScoreBadge from './components/ScoreBadge';

const URL_PROFILE_PICTURE = 'https://a.ppy.sh/';

const styles = {
  picture: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  username: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
};

function getTimeFromSeconds(sec) {
  const days = Math.floor(sec / (3600 * 24));
  const hours = Math.floor(sec / 3600) % 24;
  const minutes = Math.floor(sec / 60) % 60;
  const seconds = Math.floor(sec) % 60;
  let time = '';
  if (days > 0) {
    time += `${days}d `;
  }
  if (hours > 0) {
    time += `${hours}h `;
  }
  if (minutes > 0) {
    time += `${minutes}m `;
  }
  if (time === '' || seconds > 0) {
    time += `${seconds}s`;
  }
  return time;
}

function formatNumber(number) {
  return numeral(number).format('0,0');
}

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const { navigation } = this.props;
    const user = navigation.getParam('user', {});
    return (
      <View>
        <Image style={styles.picture} source={{ uri: URL_PROFILE_PICTURE + user.user_id }} />
        <Text style={styles.username}>{user.username}</Text>
        <View style={styles.container}>
          <Text>Rank:</Text>
          <Text>{formatNumber(user.pp_rank)}</Text>
        </View>
        <View style={styles.container}>
          <CountryRank country={user.country} />
          <Text>{formatNumber(user.pp_country_rank)}</Text>
        </View>
        <View style={styles.container}>
          <Text>Play Time:</Text>
          <Text>{getTimeFromSeconds(user.total_seconds_played)}</Text>
        </View>
        <View style={styles.container}>
          <Text>Level:</Text>
          <Text>{Math.floor(user.level)}</Text>
        </View>
        <View style={styles.container}>
          <ScoreBadge badge="SS" />
          <Text>{formatNumber(user.count_rank_ss + user.count_rank_ssh)}</Text>
        </View>
        <View style={styles.container}>
          <ScoreBadge badge="S" />
          <Text>{formatNumber(user.count_rank_s + user.count_rank_sh)}</Text>
        </View>
        <View style={styles.container}>
          <ScoreBadge badge="A" />
          <Text>{formatNumber(user.count_rank_a)}</Text>
        </View>
      </View>
    );
  }
}

export default connect()(Profile);
