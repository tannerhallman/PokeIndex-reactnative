'use strict';

import React, { Component } from 'react';
import { Router, Scene, Route } from 'react-native-router-flux';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers'

import AppContainer from './containers/AppContainer';

/* setup the logger only for development mode */
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

/* part of recipes example */
/* The intial state for the application (Empty) -- prefetch any information here */
const store = configureStore({});

/* part of recipes example */
const PokemonApp = () => (
  <Provider store = {store}>
    <AppContainer />
  </Provider>
);

/* part of recipes example */
export default PokemonApp;
