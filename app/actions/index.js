
// imports all actions from the pokemon.js and grouping it as an object
import * as PokemonActions from './pokemon';

/* Bundles all the actions that we are creating for this application in this ActionCreators
variable to keep things organized. */

export const ActionCreators = Object.assign({},
PokemonActions,
);
