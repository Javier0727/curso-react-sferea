import { combineReducers } from 'redux'
import pokemons from './pokemons.reducer'

const createReducer = (asyncReducers) =>
  combineReducers({
    pokemons,
    ...asyncReducers
  })

export default createReducer