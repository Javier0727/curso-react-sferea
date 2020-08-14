import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Button, Grid } from '@material-ui/core'

const PokemonList = () => {
  const pokeList = useSelector(({ pokemons }) => pokemons.pokemons)
  const countPokemon = useSelector(({ pokemons }) => pokemons.totalPokemons)

  return (
    <div className='w-full px-5 mt-10'>
      <Typography className='mb-3'>Listado de pokemon, mostrando 20 de {countPokemon}</Typography>
      <Grid container spacing={3} className='w-full'>
        {pokeList.map(pokemon => (
          <Grid item xs={6} key={pokemon.name}>
            <Button startIcon={<img alt={pokemon.name} src={pokemon.sprite} />} variant='outlined' color='primary' className='w-full'>
              {pokemon.name}
            </Button>
          </Grid>
        ))}
      </Grid>

    </div>
  )
}

export default PokemonList