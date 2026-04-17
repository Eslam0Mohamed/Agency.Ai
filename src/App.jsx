import { useState } from 'react'
import Navbar from './compnents/Navbar'

function App() {
const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  return (
    <div className='dark:bg-gray-800'>
     <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
