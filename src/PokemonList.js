import React, { useContext } from 'react'
import { PokemonContext } from './PokemonProvider'

const PokemonList = () => {
    
    const {
        pokemons,
        setPokemons,
        capturedPokemons,
        setCapturedPokemons
    } = useContext(PokemonContext)

    const removePokemonFromList = (removedPokemon) =>
        pokemons.filter(pokemon => pokemon !== removedPokemon)

    const capture = (pokemon) => () => {
        setCapturedPokemons([...capturedPokemons, pokemon])
        setPokemons(removePokemonFromList(pokemon))
    }


    return(
        <div className="container">
            {
                pokemons.map((pokemon) => (
                    <div key={pokemon.id}>
                        <div>
                            <span>{pokemon.name}</span>
                            <button onClick={capture(pokemon)}>+</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PokemonList