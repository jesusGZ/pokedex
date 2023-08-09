import React from 'react';

import { Tittles } from './Tittle.styled';
import viteLogo from '/favicon.ico';

const Tittle = () => {
    return (<Tittles><h1>P{<img src={viteLogo} className="logo" />}kédex</h1></Tittles>);
};

export default Tittle;
