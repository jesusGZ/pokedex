import React from 'react';

import generations from '../../data/generations';
import CustomNavLink from './CustomNavLink';
import './Navigation.scss';

export default function Navigation() {
	return (
		<div className="navigation-container">
			<h3 className="navigation-title">Selecciona una generación:</h3>
			<div className="links-container">
				{generations.map(({ id, link, text }) => (
					<CustomNavLink exact key={id} to={link}>{text}</CustomNavLink>
				))}
			</div>
		</div>
	);
}
