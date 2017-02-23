'use strict';

import React, { Component } from 'react';
import { AppRegistry, } from 'react-native';
//import App from './app/index'
/* part of recipes example */
import AppRecipes from './app/index';

export default class OffTheGrid extends Component {
  render() {
    return (
      /* part of recipes example */
      <AppRecipes />
      //<App />
    );
  }
}

AppRegistry.registerComponent('OffTheGrid', () => OffTheGrid);
