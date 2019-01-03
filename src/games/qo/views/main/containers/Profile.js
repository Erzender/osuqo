import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    height: 200,
    width: 200,
    backgroundColor: '#DDDDDD',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  charName: {
    fontWeight: 'bold',
    fontSize: 25,
    marginRight: 20,
  },
  charNameCnt: {
    borderTopWidth: 2,
    borderColor: '#BBBBBB',
    flex: 1,
    maxHeight: 50,
    flexDirection: 'row',
  },
  icon: {
    fontSize: 30,
  },
};

const Profile = ({ name, picture, rank }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      {picture !== '' && (
        <Image
          style={styles.image}
          source={{
            uri: picture,
          }}
        />
      )}
    </View>
    <View style={styles.charNameCnt}>
      <Text style={styles.charName}>{name}</Text>
      <TouchableOpacity>
        <Ionicons name="ios-create" style={styles.icon} />
      </TouchableOpacity>
    </View>
    <Text>{`Rank : ${rank}`}</Text>
  </View>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  name: state.qo.name || '',
  picture: state.qo.picture || '',
  rank: state.qo.rank || '',
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
