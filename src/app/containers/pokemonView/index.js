import React from 'react'
import { IconButton, Card, CardContent, Button } from '@material-ui/core'
import { useHistory } from "react-router-dom";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { useSelector } from 'react-redux'

const PokemonView = () => {
  const pokeData = useSelector(({ pokemons }) => pokemons.pokemonData)
  const { height, name, sprites, types, weight } = pokeData
  let history = useHistory()

  const handleClick = () => {
    history.push('/')
  }
  return (
    <div className='w-full px-5 mt-10'>
      <IconButton onClick={handleClick}>
        <ChevronLeftIcon />
      </IconButton>
      <div className='w-full flex justify-center items-center'>
        <Card variant='outlined' className='w-7/12 h-48'>
          <CardContent className='w-full h-full flex'>
            <div className='w-3/12 h-full'>
              <img alt={name} src={sprites != undefined ? sprites.front_default : ''} className='w-full h-full object-contain' />
            </div>
            <div className='w-9/12 h-full p-3 flex flex-col justify-center'>
              <div className='flex justify-between'>
                <div>
                  Nombre: {name}
                </div>
                <div>
                  Altura: {height}
                </div>
                <div>
                  Peso: {weight}
                </div>
              </div>
              <div className='flex justify-around w-full mt-12'>
                {types &&
                  types.map(type => (
                    <Button variant='contained' color='primary' key={type.type.name}>
                      {type.type.name}
                    </Button>
                  ))
                }
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PokemonView