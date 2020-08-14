import axios from 'axios'
import { BASE_API } from '../../constants/urls'

export const GET_POKEMONS = 'GET_POKEMONS'

export const getPokeList = () => {
  const request = axios.get(`${BASE_API}pokemon`)
  return dispatch => {
    request.then(req => {
      return dispatch({
        type: GET_POKEMONS,
        payload: req.data
      })
    })
  }
}