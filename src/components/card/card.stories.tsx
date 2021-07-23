import { storiesOf } from '@storybook/react';
import React from 'react';

import Card from '.';

storiesOf('components/Card)', module).add(
  'basic layout',
  () => {
    return <Card cardClicked={() => null} movie={{
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjI4NTMwMDUtNDk4Mi00ZGJjLWI3NGYtNWRiNTUyYjdkNjVhXkEyXkFqcGdeQXVyNjIxMzk1NA@@._V1_SX300.jpg',
      Title: 'ESD',
      Type: 'movie',
      Year: '1987',
      imdbID: 'tt0092941',
    }}/>;
  },
  {
    notes: ``,
  }
);
