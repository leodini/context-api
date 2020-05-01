import React, { useContext } from 'react'
import { PokemonContext } from './PokemonProvider'

const CapturedPokemons = () => {
    const {
        pokemons,
        setPokemons,
        capturedPokemons,
        setCapturedPokemons
    } = useContext(PokemonContext)

    const releasePokemon = (releasedPokemon) => 
        capturedPokemons.filter(pokemon => pokemon !== releasedPokemon)

    const release = (pokemon) => () => {
        setCapturedPokemons(releasePokemon(pokemon))
        setPokemons([...pokemons, pokemon])
    }

    return(
        <div className="container">
            <h2>captured pokemons</h2>
            {
                capturedPokemons.map((pokemon) => (
                    <div key={pokemon.id}>
                        <div>
                            <span>{pokemon.name}</span>
                            <button onClick={release(pokemon)}>-</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CapturedPokemons