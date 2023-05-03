import React from 'react';

import generations from '../../data/generations';
import CustomNavLink from './CustomNavLink';
import './Navigation.scss';

const Navigation = () => {
	return (
		<div className='navigation'>
			<h2 className='navigation-tittle'>Selecciona la generación:</h2>
			<div className='content-navigation-links'>
				{generations.map(({ id, link, text }) => (
					<CustomNavLink exact key={id} to={link}>
						{text}
					</CustomNavLink>
				))}
			</div>
		</div>
	);
};

export default Navigation;
