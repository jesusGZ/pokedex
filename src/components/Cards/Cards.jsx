import React, { useEffect, useState } from 'react';

import { getPokemons } from '../../services/pokeApi';
import './Cards.scss';

const Cards = () => {

	const [pokemons, setPokemons] = useState([])

	async function pokemonsList() {
		try {
			const pokemons_list = await getPokemons(100, 151);
			setPokemons(pokemons_list.results)
			return;
		} catch (error) {
			return;
		}
	}

	useEffect(() => { pokemonsList() }, []);

	return (
		<>
			<div className='cards-wapper'>
				{pokemons.map((item) => {
					return (
						<div className='cards-content' /* onClick={} */>
							<div className='cards'>{item.name}</div>
						</div>
					)
				})}
			</div>
		</>
	);
};

export default Cards;
