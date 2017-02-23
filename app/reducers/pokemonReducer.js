/* part of recipes example */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const searchedPokemon = createReducer({}, {
  [types.SET_SEARCHED_POKEMON](state, action) {
    let newState = {};
    console.log(action.pokemon)
    action.pokemon.forEach( (pokemon) => {
      newState[pokemon.id] = pokemon
    });
    return newState;
  }
});

/* listening for ADD_RECIPE actions to manipulate the state */
export const recipeCount = createReducer(0, {
  [types.SET_SEARCHED_POKEMON](state, action){
    return action.pokemon.length;
  },
  [types.ADD_RECIPE](state, action) {
    return state + 1; /* */
  }
}

);
