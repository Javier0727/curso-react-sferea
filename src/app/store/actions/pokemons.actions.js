import axios from 'axios'
import { BASE_API } from '../../constants/urls'

export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_POKEMON_DATA = 'GET_POKEMON_DATA'

export const getPokeList = () => {
  const request = axios.get(`${BASE_API}pokemon?offset=0&limit=20`)
  return dispatch => {
    request.then(req => {
      return dispatch({
        type: GET_POKEMONS,
        payload: { ...req.data, paginationActual: 1 }
      })
    })
  }
}

export const pagination = (endpoint, flag, pageActual) => {
  const request = axios.get(endpoint)
  return dispatch => {
    request.then(req => {
      return dispatch({
        type: GET_POKEMONS,
        payload: { ...req.data, paginationActual: flag ? (Number(pageActual) + 1) : (Number(pageActual) - 1) }
      })
    })
  }
}

export const getPokemonData = (id) => {
  const request = axios.get(`${BASE_API}pokemon/${id}`)
  return dispatch => {
    request.then(req => {
      return dispatch({
        type: GET_POKEMON_DATA,
        payload: req.data
      })
    })
  }
}