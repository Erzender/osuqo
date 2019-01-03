import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

const URL_FLAG_PICTURE = 'https://osu.ppy.sh/images/flags/';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};

class CountryRank extends React.PureComponent {
  render() {
    const { country } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 30 }}
          source={{ uri: `${URL_FLAG_PICTURE + country}.png` }}
        />
        <Text> Rank:</Text>
      </View>
    );
  }
}

CountryRank.propTypes = {
  country: PropTypes.string.isRequired,
};

export default CountryRank;
