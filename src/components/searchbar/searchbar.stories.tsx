import { storiesOf } from '@storybook/react';
import React from 'react';

import { SearchBar } from '.';

storiesOf('components/SearchBar)', module).add(
  'basic layout',
  () => {
    return (
      <SearchBar
        onSearch={() => null}
      />
    );
  },
  {
    notes: ``,
  }
);
