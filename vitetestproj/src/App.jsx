import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [bgclr, setBackground] = useState("white");
  const dark = () => {
    setBackground("black");
  }

  return (  
    <div className="bg" style = {{backgroundColor:bgclr}}>
      <button onClick={dark} >Dark Mode</button>
    </div>
  )

}


export default App
