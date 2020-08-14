import React from 'react'
import { Provider } from 'react-redux';
import store from './store'
import Header from './containers/header';
import PokemonList from './containers/pokemonList';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <PokemonList />
    </Provider>
  )
}

export default App