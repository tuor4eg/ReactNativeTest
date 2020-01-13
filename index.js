/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './app/index';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';

import configureStore from './app/src/store';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
