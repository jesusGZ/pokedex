import { useCallback, useEffect, useMemo, useState } from 'react';

import { getPokemonDetails, getPokemons } from '../services/pokeApi';
import generations from '../constants/generations';

export default function useGeneration(generationId) {

	const [isLoading, setIsLoading] = useState(false);
	const [pokemons, setPokemons] = useState([]);

	const generation = useMemo(() => { return generations.find((gen) => gen.id === generationId); }, [generationId]);

	// Fetch pokemons data by generation.
	const fetchData = useCallback(() => {
		if (generation.limit === null || generation.offset === null) return;

		setIsLoading(true);
		setPokemons([]);

		// Get all Pokemons for the selected generation.
		getPokemons(generation.limit, generation.offset).then(async ({ results }) => {
			const data = [];
			// Get data for each specific Pokemon.
			await Promise.all(results.map(async ({ name }) => {
				const pokemon = await getPokemonDetails(name);
				data[pokemon.id] = pokemon;
			}));

			setIsLoading(false);
			setPokemons(data);
		});
	}, []);

	useEffect(() => { if (generationId) fetchData(); }, [generationId]);

	return { data: pokemons, refetch: fetchData, isLoading, };
}
