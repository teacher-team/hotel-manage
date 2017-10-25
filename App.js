/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Router from './router/router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducer';

const store = createStore(reducer);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

