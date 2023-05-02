import { useState, useContext, createContext } from 'react';

export const PokemonsContext = createContext();

export default function PokemonsProvider({ children }) {

    const [currentPokemonId, setCurrentPokemonId] = useState(-1);
    const [pokemons, setPokemons] = useState([]);

    const currentPokemon = pokemons[currentPokemonId];

    return (
        <PokemonsContext.Provider value={{ pokemons, setPokemons, currentPokemonId, setCurrentPokemonId, currentPokemon }}>
            {children}
        </PokemonsContext.Provider>
    );
}

export const usePokemons = () => { return useContext(PokemonsContext); };
