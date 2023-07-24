import React from 'react';

import generations from '../../data/generations';
import CustomNavLink from './CustomNavLink';
import './Navigation.scss';

function Navigation() {
	return (
		<div className="navigation-container">
			<h3 className="navigation-title">Select Generation:</h3>

			<div className="links-container">
				{
					generations.map(({ id, link, text }) => (
						<CustomNavLink exact key={id} to={link}>
							{text}
						</CustomNavLink>
					))
				}
			</div>
		</div>
	);
}

export default Navigation;
