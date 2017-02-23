'use strict';

import { combineReducers } from 'redux';
import * as pokemonReducer from './pokemonReducer';


/* This takes different bits of state data and holds that as a reducer instead of state */
// Object.assign is used because of the way reducers are created (using a wrapper funciton)
export default combineReducers(Object.assign(
  pokemonReducer,
));
