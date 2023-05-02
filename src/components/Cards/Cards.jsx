import React, { useEffect, useState, memo } from 'react';

import { getPokemons, getImageURL, getGenerations } from '../../services/pokeApi';
import './Cards.scss';

const Cards = ({ pokemon, onClick }) => {

	/* if (!pokemon) { return null; }

	const { name, id, types } = pokemon;

	const imgURL = getImageURL(id),
		className = types.map(({ type }) => 'type-' + type.name).join(' '),
		paddedId = '#' + id.toString().padStart(3, '000'); */

	const [pokemons, setPokemons] = useState([])

	async function pokemonsList() {
		try {

			const generations = await getGenerations(1);
			console.log(generations);
			const cantidad = generations.pokemon_species.length
			const pokemons_list = await getPokemons(cantidad, cantidad);
			setPokemons(pokemons_list.results)
			return;
		} catch (error) {
			return;
		}
	}

	useEffect(() => { pokemonsList() }, []);

	return (
		<>
			<div className='cards-wapper'/*  onClick={onClick} */>
				{pokemons.map((item) => {
					return (
						<div className='cards-content' >
							<div className='cards'>{item.name}</div>
						</div>
					)
				})}
			</div>
		</>
	);
};

export default memo(Cards);
