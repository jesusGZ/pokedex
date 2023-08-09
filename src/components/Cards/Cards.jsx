import { memo, useEffect, useState } from 'react';

import { CardContainer, Card, PokemonId, CardTitle, PokemonTypes, PokemonImage } from './Cards.styled.js';
import { getImageURL } from '../../services/pokeApi';

function Cards({ pokemon, onClick }) {

	if (!pokemon) { return null; }

	const [imgURL, setImgURL] = useState(0);

	const { name, id, types } = pokemon;
	const className = types.map(({ type }) => 'type-' + type.name).join(' ');
	const paddedId = '#' + id.toString().padStart(3, '000');

	useEffect(async () => { const img_uRL = await getImageURL(id); setImgURL(img_uRL); }, [id]);

	return (
		<CardContainer onClick={onClick}>
			<Card className={`card ${className}`}>
				<div className="bg-pokeball"></div>
				<PokemonId>{paddedId}</PokemonId>
				<CardTitle>
					<h2>{name.replace(/-/g, ' ')}</h2>
					<PokemonTypes>
						{types.map(({ type }) => (
							<span key={type.name}>{type.name}</span>
						))}
					</PokemonTypes>
				</CardTitle>
				<PokemonImage>
					<img alt={name} src={imgURL} />
				</PokemonImage>
			</Card>
		</CardContainer>
	);
}

export default memo(Cards);
