import React, { createContext, useState} from 'react'

export const PokemonContext = createContext()

const PokemonProvider = (props) => {
    const [pokemons, setPokemons] = useState([
        { id: 1, name: 'bulbasaur' },
        { id: 2, name: 'charmander' },
        { id: 3, name: 'squirtle' }
    ])

    const [capturedPokemons, setCapturedPokemons] = useState([])

    const providerValue = {
        pokemons,
        setPokemons,
        capturedPokemons,
        setCapturedPokemons
    }

    return(
        <PokemonContext.Provider value={providerValue}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider