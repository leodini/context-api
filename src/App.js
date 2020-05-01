import React from 'react';
import PokemonList from './PokemonList'
import Pokedex from './Pokedex'
import CapturedPokemon from './CapturedPokemons'
import PokemonProvider from './PokemonProvider'
import './App.css';

function App() {

  return (
    <PokemonProvider>
      <div className="App">
        <h2>pokemon</h2>
        <PokemonList />
        <Pokedex />
        <CapturedPokemon />
      </div>
    </PokemonProvider>
  );
}

export default App;
