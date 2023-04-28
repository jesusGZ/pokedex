import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import fondo from './img/bg.jpg'
console.log(fondo);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*  <div style={{ 'background-image': url({ fondo }) }}></div> */}
    <App />
  </React.StrictMode>,
)
