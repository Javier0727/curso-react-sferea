import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Grid, IconButton, Grow } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import * as Actions from '../../store/actions'
import { getIdPokemon } from '../../helpers/getIdPokemon.helpler'
import { BrowserRouter as Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PokemonList = () => {
  const pokeList = useSelector(({ pokemons }) => pokemons.pokemons)
  const countPokemon = useSelector(({ pokemons }) => pokemons.totalPokemons)
  const paginationPrevious = useSelector(({ pokemons }) => pokemons.pagination.previous)
  const paginationNext = useSelector(({ pokemons }) => pokemons.pagination.next)
  const paginationActual = useSelector(({ pokemons }) => pokemons.pagination.actual)
  const dispatch = useDispatch()
  let history = useHistory()

  const handlePagination = (e) => {
    dispatch(Actions.pagination(e ? paginationNext : paginationPrevious, e, paginationActual))
  }

  const handlePokemon = (pokeUrl) => {
    history.push('/pokeInfo')
    dispatch(Actions.getPokemonData(getIdPokemon(pokeUrl)))
  }

  return (
    <div className='w-full px-5 mt-10'>
      <div className='w-full flex justify-between py-4 mb-3 items-center'>
        <div>Listado de pokemon, página {paginationActual} de {Math.ceil(countPokemon / 20)}</div>
        <div>
          <IconButton color='primary' name='prev' onClick={() => handlePagination(false)} disabled={paginationPrevious === null} size='medium'>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton color='primary' name='next' onClick={() => handlePagination(true)} disabled={paginationNext === null} size='medium'>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <Grid container spacing={3} className='w-full'>
        {pokeList.map(pokemon => (
          <Grid item xs={6} key={pokemon.name}>
            <Grow timeout={1000} in={true}>
              <Link to='/pokeInfo'>
                <Button onClick={() => handlePokemon(pokemon.url)} startIcon={<img alt={pokemon.name} src={pokemon.sprite} />} variant='outlined' color='primary' className='w-full'>
                  {pokemon.name}
                </Button>
              </Link>
            </Grow>
          </Grid>
        ))}
      </Grid>

    </div>
  )
}

export default PokemonList