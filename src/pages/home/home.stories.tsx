import { storiesOf } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import Home from '.';
import store from '../../store';

storiesOf('pages/Home)', module).add(
  'renders home page with store',
  () => {
    return <Provider store={store}>
        <Home/>
    </Provider>;
  },
  {
    notes: ``,
  }
);
