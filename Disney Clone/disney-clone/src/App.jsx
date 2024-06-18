import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header.jsx'
import Slider from './Components/Slider.jsx'

function App() {

  return (
    <div className>
      <Header />
      
      <Slider />
    </div>
  )
}

export default App
