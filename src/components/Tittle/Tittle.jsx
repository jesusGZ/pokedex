import React from 'react';

import viteLogo from '/favicon.ico';
import './Tittle.scss';

const Tittle = () => {
    return (<div className='tittle'><h1>P{<img src={viteLogo} className="logo" />}kédex</h1></div>);
};

export default Tittle;
