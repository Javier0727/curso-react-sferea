import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Actions from '../../store/actions'
import { Typography } from '@material-ui/core';

const Header = () => {
  const countPokemon = useSelector(({ pokemons }) => pokemons.totalPokemons)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(Actions.getPokeList())
  }, [])

  return (
    <div className='w-full bg-blue-600 text-white p-5'>
      <Typography>
        Hay {countPokemon} pokemon
      </Typography>
    </div>
  )
}

export default Header