import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CountryRank from '../../src/games/osu/components/CountryRank';
import ScoreBadge from '../../src/games/osu/components/ScoreBadge';

storiesOf('CountryRank', module)
  .add('FR', () => <CountryRank country="FR" />)
  .add('US', () => <CountryRank country="US" />)
  .add('DE', () => <CountryRank country="DE" />);

storiesOf('ScoreBadge', module)
  .add('SS', () => <ScoreBadge badge="SS" />)
  .add('S', () => <ScoreBadge badge="S" />)
  .add('A', () => <ScoreBadge badge="A" />);
