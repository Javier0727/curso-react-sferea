import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import * as Actions from '../../store/actions/index'

const Header = () => {
  const totalPokemons = useSelector(({ pokemons }) => pokemons.totalPokemons)
  const miNombre = useSelector(({ pokemons }) => pokemons.name)
  const [name, setName] = React.useState('')
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(Actions.setName(name))
  }

  return (
    <div className='w-full bg-blue-600 text-white p-5'>
      {miNombre === '' ? (
        <div className='flex items-center'>
          <TextField variant='outlined' label='Escribe tu nombre' onChange={e => setName(e.target.value)} />
          <Button onClick={handleClick}>Save name</Button>
        </div>
      ) : (
          miNombre
        )}
    </div>
  )
}

export default Header