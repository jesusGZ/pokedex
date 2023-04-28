import React, { useEffect, useState } from 'react';
import './Cards.scss';

const [pokemons, setPokemons] = useState([])

useEffect(() => { }, []);

const Cards = () => {
	return (
		<div className='cards-wapper'>
			<div className='cards-content'>
				<div className='cards'>Card</div>
			</div>
			<div className='cards-content'>
				<div className='cards'>Card</div>
			</div>
			<div className='cards-content'>
				<div className='cards'>Card</div>
			</div>
			<div className='cards-content'>
				<div className='cards'>Card</div>
			</div>
			<div className='cards-content'>
				<div className='cards'>Card</div>
			</div>
			<div className='cards-content'>
				<div className='cards'>Card</div>
			</div>
			<div className='cards-content'>
				<div className='cards'>Card</div>
			</div>
			<div className='cards-content'>
				<div className='cards'>Card</div>
			</div>
			<div className='cards-content'>
				<div className='cards'>Card</div>
			</div>
			<div className='cards-content'>
				<div className='cards'>Card</div>
			</div>
			<div className='cards-content'>
				<div className='cards'>Card</div>
			</div>
		</div>
	);
};

export default Cards;
