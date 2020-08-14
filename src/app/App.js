import React from 'react'
import { Provider } from 'react-redux';
import store from './store'
import Header from './containers/header';
import PokemonList from './containers/pokemonList';
import PokemonView from './containers/pokemonView';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path='/pokeInfo'>
            <PokemonView />
          </Route>
          <Route path='/'>
            <PokemonList />
          </Route>
        </Switch>
      </Provider>
    </Router>
  )
}

export default App