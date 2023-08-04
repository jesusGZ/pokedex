import React, { useEffect } from 'react';

import { usePokemons } from '../../context/pokemonsProvider';
import { useGeneration } from '../../hooks';
import { Loader } from '../Loader';
import Cards from '../Cards/Cards';
import './PokedexView.scss';

const PokedexView = ({ generation }) => {
	const { pokemons, setPokemons, setCurrentPokemonId } = usePokemons();
	const { data, isLoading } = useGeneration(generation);

	useEffect(() => { setPokemons(data); }, [data]);

	if (isLoading) { return <Loader />; }

	return (
		<div className="pokedex-view">
			{pokemons.map((pokemon) => {
				return (<Cards pokemon={pokemon} key={pokemon.id} onClick={() => setCurrentPokemonId(pokemon.id)} />);
			})}
		</div>
	);
};

export default PokedexView;
