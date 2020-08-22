import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../../store/actions/index'

const PokemonList = () => {
  const dispatch = useDispatch()
  const pokeList = useSelector(({ pokemons }) => pokemons.pokemons)
  const totalPokemons = useSelector(({ pokemons }) => pokemons.totalPokemons)

  React.useEffect(() => {
    dispatch(Actions.getPokeList())
  }, [])

  return (
    // TODO: Lista pokemon donde se va a mapear el arreglo de objetos
    <div>
      Hay {totalPokemons}
    </div>
  )
}

export default PokemonList