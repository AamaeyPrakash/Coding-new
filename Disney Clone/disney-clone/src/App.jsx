import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import Slider from './Components/Slider.jsx'
import ProductionHouse from './Components/ProductionHouse.jsx'

function App() {

  return (
    <div className>
      <Header />
      
      <Slider />

      <ProductionHouse/>
    </div>
  )
}

export default App
