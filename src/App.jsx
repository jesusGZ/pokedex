import { useState } from 'react'

import Tittle from './components/Tittle/Tittle';
import './App.scss';
import Navigation from './components/Navigation/Navigation';

function App() {

  return (
    <>
      <div className='content'>
        <Tittle />
        <Navigation />
      </div>
    </>
  )
}

export default App
