import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

const URL_SS_PICTURE = 'https://osu.ppy.sh/images/badges/score-ranks-v2/SS.png';
const URL_S_PICTURE = 'https://osu.ppy.sh/images/badges/score-ranks-v2/S.png';
const URL_A_PICTURE = 'https://osu.ppy.sh/images/badges/score-ranks-v2/A.png';

class ScoreBadge extends React.PureComponent {
  render() {
    const { badge } = this.props;
    let urlBadgePicture;
    switch (badge) {
      case 'SS':
        urlBadgePicture = URL_SS_PICTURE;
        break;
      case 'S':
        urlBadgePicture = URL_S_PICTURE;
        break;
      case 'A':
        urlBadgePicture = URL_A_PICTURE;
        break;
      default:
        break;
    }
    return <Image style={{ width: 50, height: 25 }} source={{ uri: urlBadgePicture }} />;
  }
}

ScoreBadge.propTypes = {
  badge: PropTypes.string.isRequired,
};

export default ScoreBadge;
