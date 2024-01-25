import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './output.css'
import Course from './Course'
import Term from './Term'
import Year from './Year'
import ColorBlock from "./ColorBlock"
import ColorPalette from "./ColorPalette"

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <div className='flex justify-center'>
      <Year/>
      <Year/> 
      <Year/> 
      <Year/> 
      <ColorBlock />
      <ColorPalette/>
    </div>



    </>
  )
}

export default App
