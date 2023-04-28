import React from 'react';

import './Navigation.scss';

const Navigation = () => {
	return (
		<div className='navigation'>
			<h2 className='navigation-tittle'>Selecciona la generación:</h2>
			<div className='content-navigation-links'>
				<a className='navigation-links' href="/gen-i">I</a>
				<a className='navigation-links' href="/gen-ii">II</a>
				<a className='navigation-links' href="/gen-iii">III</a>
				<a className='navigation-links' href="/gen-iv">IV</a>
				<a className='navigation-links' href="/gen-v">V</a>
				<a className='navigation-links' href="/gen-vi">VI</a>
				<a className='navigation-links' href="/gen-vii">VII</a>
				<a className='navigation-links' href="/gen-viii">VIII</a>
			</div>
		</div>
	);
};

export default Navigation;
