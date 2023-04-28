import { useState } from 'react';

import Navigation from './components/Navigation/Navigation';
import Tittle from './components/Tittle/Tittle';
import './App.scss';
import Cards from './components/Cards/Cards';

function App() {

  return (
    <>
      <div className='content'>
        <Tittle />
        <Navigation />
        <Cards />
      </div>
    </>
  );
}

export default App;
