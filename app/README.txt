This file is intended to keep some React Native concepts close to the project and how they work.

Redux pattern:

Server <--->    Actions -> Reducer -> Components
                    ^                       |
                    |   <-    <-    <-     <-

Notice arrows generally only go one way

PokeApi <--->    [setSearchedPokemon] -> [PokemonReducer] -> [Home]
                    ^                                           |
                    |       <-       <-       <-       <-      <-


Folder Structure:
  actions -> index.js [bundles all the acitons together]
          -> pokemon.js [hosts all the action functions that the app can perform]
          -> types.js [hosts the keywords of those actions and how you can seelc]
  components ->
  containers ->
  lib -> api.js [a small library of functions for api calls]
      -> createReducer.js [a function that takes intialState and what actions you want to listen to and returns a reducer function.. replaces a switch statement when you create reducers]
  reducers ->
