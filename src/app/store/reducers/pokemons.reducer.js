import * as Actions from '../actions'
import { getIdPokemon } from '../../helpers/getIdPokemon.helpler'

const initialState = {
  pokemons: [],
  totalPokemons: 0,
  pokemonData: {},
  pagination: {
    next: null,
    previous: null
  }
}

const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_POKEMONS:
      let { count, results, next, previous } = action.payload
      let resultFilter = results.map(res=>({...res, sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIdPokemon(res.url)}.png`}))
      return {
        ...state,
        pokemons: resultFilter,
        totalPokemons: count,
        pagination: { ...state.pagination, next, previous }
      }
      break;

    default:
      return state
      break;
  }
}

export default pokemons