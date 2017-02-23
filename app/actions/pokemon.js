import * as types from './types'
import Api from '../lib/api'


/*  searching for pokemon */
export function fetchPokemon(ingredients){
  return (dispatch, getState) => {
    console.log("state at beginning of fetchPokemon() " + getState());
    const params = [
      `${encodeURIComponent(ingredients.toLowerCase())}`
    ];
    return Api.get(`/pokemon-form/${params}/`).then(
      resp => {
      dispatch(setSearchedPokemon( { pokemon: resp } ));

    }).catch( (ex) => {
      console.log(ex);
    })
  }
}
/*  fetchPokemon() will trigger this action */
export function setSearchedPokemon( { pokemon }){
  return {
    type: types.SET_SEARCHED_POKEMON,
    pokemon
  }
}

export function addRecipe(){
  return {
    type: types.ADD_RECIPE,
  }
}
