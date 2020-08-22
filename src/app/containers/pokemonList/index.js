import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../../store/actions/index'
import Grid from '@material-ui/core/Grid';

const PokemonList = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(({ pokemons }) => pokemons.pokemons)
  const totalPokemons = useSelector(({ pokemons }) => pokemons.totalPokemons)

  React.useEffect(() => {
    
  }, [])

  return (
    <div className='px-5 py-4'>
      Hay {totalPokemons}
      <Grid container spacing={3} className='mt-10'>

        {pokemons.map(pokemon => (
          <Grid item xs={6}>
            Nombre
          </Grid>
        ))}

      </Grid>
    </div>
  )
}

export default PokemonList